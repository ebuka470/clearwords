export default async function handler(req, res) {
    // Handle CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    
    const { prompt } = req.body || {};
    
    if (!prompt) {
        return res.status(400).json({ error: 'Missing prompt' });
    }
    
    // 7 days cache, 24 hours stale-while-revalidate
    res.setHeader('Cache-Control', 's-maxage=604800, stale-while-revalidate=86400');
    
    try {
        const response = await fetch('https://autopost-backend-hbck.onrender.com/clearwordsapi/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt })
        });
        
        if (!response.ok) {
            throw new Error(`API returned ${response.status}`);
        }
        
        const data = await response.json();
        return res.status(200).json(data);
        
    } catch (error) {
        console.error('Proxy error:', error.message);
        return res.status(200).json({ 
            data: JSON.stringify({
                paragraph1: "Abeg, my brain dey do yanga right now!",
                paragraph2: "Try again small, make we continue our gist."
            })
        });
    }
}
