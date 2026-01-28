// app.js - Enhanced PWA functionality with curriculum loading
console.log("ClearWords PWA service loaded");

// Service Worker registration for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registration successful with scope:', registration.scope);
            
            // Check for updates
            registration.addEventListener('updatefound', () => {
                const newWorker = registration.installing;
                console.log('ServiceWorker update found!');
                
                newWorker.addEventListener('statechange', () => {
                    if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                        // New update available
                        showUpdateNotification();
                    }
                });
            });
        }).catch(err => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// Offline detection and network status
let isOnline = navigator.onLine;
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

function updateOnlineStatus() {
    isOnline = navigator.onLine;
    const status = isOnline ? 'online' : 'offline';
    console.log(`Network: ${status}`);
    
    if (isOnline) {
        hideOfflineNotification();
        showOnlineNotification();
    } else {
        showOfflineNotification();
    }
}

function showOfflineNotification() {
    if (document.getElementById('offline-indicator')) return;
    
    const indicator = document.createElement('div');
    indicator.id = 'offline-indicator';
    indicator.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: #FF7F50;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        z-index: 9999;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 8px;
        animation: slideDown 0.3s ease;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from { transform: translateY(-20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideUp {
            from { transform: translateY(0); opacity: 1; }
            to { transform: translateY(-20px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    indicator.innerHTML = `
        <span>⚠️</span>
        <span>Offline Mode - Using cached content</span>
    `;
    
    document.body.appendChild(indicator);
}

function hideOfflineNotification() {
    const indicator = document.getElementById('offline-indicator');
    if (indicator) {
        indicator.style.animation = 'slideUp 0.3s ease forwards';
        setTimeout(() => indicator.remove(), 300);
    }
}

function showOnlineNotification() {
    const indicator = document.createElement('div');
    indicator.id = 'online-indicator';
    indicator.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        background: #4CAF50;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        z-index: 9999;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        gap: 8px;
        animation: slideDown 0.3s ease;
    `;
    
    indicator.innerHTML = `
        <span>✓</span>
        <span>Back Online</span>
    `;
    
    document.body.appendChild(indicator);
    
    setTimeout(() => {
        indicator.style.animation = 'slideUp 0.3s ease forwards';
        setTimeout(() => indicator.remove(), 300);
    }, 2000);
}

// Update notification
function showUpdateNotification() {
    const notification = document.createElement('div');
    notification.id = 'update-notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 20px;
        right: 20px;
        background: var(--card-bg, white);
        color: var(--text, black);
        padding: 16px;
        border-radius: 12px;
        z-index: 9998;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        border: 1px solid var(--border, #e0e0e0);
        animation: slideUp 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 8px;">Update Available</div>
        <div style="font-size: 14px; color: var(--text-secondary, #666); margin-bottom: 12px;">
            A new version of ClearWords is available. Refresh to update.
        </div>
        <div style="display: flex; gap: 10px; justify-content: flex-end;">
            <button id="update-later" style="padding: 8px 16px; background: transparent; border: 1px solid var(--border, #e0e0e0); color: var(--text, black); border-radius: 6px; cursor: pointer;">
                Later
            </button>
            <button id="update-now" style="padding: 8px 16px; background: var(--primary, #2E8B57); color: white; border: none; border-radius: 6px; cursor: pointer;">
                Update Now
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    document.getElementById('update-later').addEventListener('click', () => {
        notification.remove();
    });
    
    document.getElementById('update-now').addEventListener('click', () => {
        window.location.reload();
    });
}

// Error boundary with enhanced error handling
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
    
    // Don't show error alert in production unless it's critical
    if (window.location.hostname !== 'localhost' && !event.error.message.includes('critical')) {
        return;
    }
    
    // Show friendly error overlay for development
    if (!document.getElementById('error-overlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'error-overlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            padding: 20px;
            text-align: center;
            backdrop-filter: blur(10px);
        `;
        
        overlay.innerHTML = `
            <div style="font-size: 64px; margin-bottom: 20px;">😅</div>
            <div style="font-size: 24px; margin-bottom: 10px; font-weight: 600;">Something went wrong</div>
            <div style="margin-bottom: 20px; max-width: 400px; line-height: 1.6; color: #ccc;">
                The app encountered an error. Don't worry, your progress is saved locally.
            </div>
            <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; margin-bottom: 20px; max-width: 400px; text-align: left;">
                <div style="font-size: 12px; color: #999; margin-bottom: 5px;">Error Details:</div>
                <div style="font-size: 13px; font-family: monospace; word-break: break-all;">
                    ${event.error.message || 'Unknown error'}
                </div>
            </div>
            <div style="display: flex; gap: 10px;">
                <button onclick="location.reload()" style="padding: 12px 24px; background: #FF7F50; color: white; border: none; border-radius: 25px; cursor: pointer; font-weight: 600;">
                    Refresh Page
                </button>
                <button onclick="document.getElementById('error-overlay').remove()" style="padding: 12px 24px; background: transparent; color: white; border: 1px solid rgba(255,255,255,0.3); border-radius: 25px; cursor: pointer;">
                    Continue Anyway
                </button>
            </div>
        `;
        
        document.body.appendChild(overlay);
    }
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    
    // Log to analytics in production
    if (window.location.hostname !== 'localhost') {
        // Send to analytics service
        console.log('Sending error to analytics:', event.reason);
    }
});

// Performance monitoring with enhanced metrics
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            try {
                const perfData = performance.getEntriesByType('navigation')[0];
                if (perfData) {
                    const metrics = {
                        loadTime: perfData.loadEventEnd - perfData.startTime,
                        dnsTime: perfData.domainLookupEnd - perfData.domainLookupStart,
                        tcpTime: perfData.connectEnd - perfData.connectStart,
                        requestTime: perfData.responseEnd - perfData.requestStart,
                        domReadyTime: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                        pageLoadTime: perfData.loadEventEnd - perfData.loadEventStart
                    };
                    
                    console.log('Performance metrics:', metrics);
                    
                    // Store for potential debugging
                    localStorage.setItem('clearWordsPerfMetrics', JSON.stringify({
                        ...metrics,
                        timestamp: new Date().toISOString()
                    }));
                }
                
                // Monitor memory usage if available
                if (performance.memory) {
                    console.log('Memory usage:', {
                        usedJSHeapSize: Math.round(performance.memory.usedJSHeapSize / 1048576) + 'MB',
                        totalJSHeapSize: Math.round(performance.memory.totalJSHeapSize / 1048576) + 'MB',
                        jsHeapSizeLimit: Math.round(performance.memory.jsHeapSizeLimit / 1048576) + 'MB'
                    });
                }
            } catch (error) {
                console.warn('Performance monitoring failed:', error);
            }
        }, 0);
    });
}

// Network quality detection
function checkNetworkQuality() {
    if (!navigator.connection) return;
    
    const connection = navigator.connection;
    const quality = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink + ' Mbps',
        rtt: connection.rtt + ' ms',
        saveData: connection.saveData
    };
    
    console.log('Network quality:', quality);
    
    // Adjust app behavior based on network quality
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        // Limit data-intensive operations
        console.log('Slow network detected, optimizing for low bandwidth');
    }
}

// Initialize network quality check
if (navigator.connection) {
    navigator.connection.addEventListener('change', checkNetworkQuality);
    setTimeout(checkNetworkQuality, 3000);
}

// Install prompt for PWA
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    console.log('Install prompt available');
    
    // Show install button in settings immediately
    if (window.showInstallInSettings) {
        showInstallInSettings();
    }
    
    // Show install prompt after 30 seconds of usage
    setTimeout(() => {
        if (!localStorage.getItem('clearWordsInstallDismissed')) {
            showInstallPrompt();
        }
    }, 30000);
    
    // Track the event
    if (window.trackEvent) {
        trackEvent('pwa_install_prompt_available');
    }
});

function showInstallPrompt() {
    if (!deferredPrompt || localStorage.getItem('clearWordsInstallDismissed')) return;
    
    const prompt = document.createElement('div');
    prompt.id = 'install-prompt';
    prompt.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 20px;
        right: 20px;
        background: var(--card-bg, white);
        color: var(--text, black);
        padding: 16px;
        border-radius: 12px;
        z-index: 9998;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        border: 1px solid var(--border, #e0e0e0);
        animation: slideUp 0.3s ease;
    `;
    
    prompt.innerHTML = `
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
            <div style="font-size: 24px;">📱</div>
            <div style="flex: 1;">
                <div style="font-weight: 600; font-size: 15px;">Install ClearWords</div>
                <div style="font-size: 13px; color: var(--text-secondary, #666);">
                    Install for faster access and offline learning
                </div>
            </div>
        </div>
        <div style="display: flex; gap: 10px;">
            <button id="install-dismiss" style="padding: 8px 16px; background: transparent; border: 1px solid var(--border, #e0e0e0); color: var(--text, black); border-radius: 6px; cursor: pointer; flex: 1;">
                Not Now
            </button>
            <button id="install-accept" style="padding: 8px 16px; background: var(--primary, #2E8B57); color: white; border: none; border-radius: 6px; cursor: pointer; flex: 1; font-weight: 600;">
                Install
            </button>
        </div>
    `;
    
    document.body.appendChild(prompt);
    
    document.getElementById('install-dismiss').addEventListener('click', () => {
        prompt.remove();
        localStorage.setItem('clearWordsInstallDismissed', 'true');
    });
    
    document.getElementById('install-accept').addEventListener('click', async () => {
        prompt.remove();
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User ${outcome} the install prompt`);
        deferredPrompt = null;
    });
}

// Detect platform for platform-specific optimizations
function detectPlatform() {
    const platform = {
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isIOS: /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        isAndroid: /Android/.test(navigator.userAgent),
        isDesktop: !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
        isPWA: window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone
    };
    
    console.log('Platform detected:', platform);
    
    // Apply platform-specific optimizations
    if (platform.isIOS) {
        // iOS-specific fixes
        document.documentElement.style.setProperty('--safe-area-inset-bottom', 'env(safe-area-inset-bottom)');
    }
    
    return platform;
}

// Enhanced install prompt for PWA with better UX
function showInstallPrompt() {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        console.log('App is already installed');
        return;
    }
    
    // Check if prompt was recently dismissed
    const lastPrompt = localStorage.getItem('clearWordsInstallPromptTime');
    const now = Date.now();
    const oneWeek = 7 * 24 * 60 * 60 * 1000;
    
    if (lastPrompt && (now - parseInt(lastPrompt)) < oneWeek) {
        console.log('Install prompt was recently dismissed');
        return;
    }
    
    if (!deferredPrompt || localStorage.getItem('clearWordsInstallDismissed')) return;
    
    // Create enhanced install prompt
    const prompt = document.createElement('div');
    prompt.id = 'install-prompt-enhanced';
    prompt.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        max-width: 400px;
        background: linear-gradient(135deg, var(--primary) 0%, var(--accent1) 100%);
        color: white;
        padding: 20px;
        border-radius: 20px;
        z-index: 10001;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        border: 2px solid rgba(255,255,255,0.2);
        animation: slideUpInstall 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        flex-direction: column;
        gap: 15px;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUpInstall {
            from { 
                transform: translateX(-50%) translateY(100px);
                opacity: 0; 
            }
            to { 
                transform: translateX(-50%) translateY(0);
                opacity: 1; 
            }
        }
        @keyframes slideDownInstall {
            from { 
                transform: translateX(-50%) translateY(0);
                opacity: 1; 
            }
            to { 
                transform: translateX(-50%) translateY(100px);
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(style);
    
    prompt.innerHTML = `
        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 10px;">
            <div style="
                width: 60px;
                height: 60px;
                background: white;
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            ">
                <img src="/logo.png" alt="ClearWords Logo" style="width: 100%; height: 100%; object-fit: contain; padding: 8px;">
            </div>
            <div style="flex: 1;">
                <div style="font-weight: 700; font-size: 18px; margin-bottom: 3px;">Get the ClearWords App</div>
                <div style="font-size: 13px; opacity: 0.9;">Install for faster access, offline learning, and push notifications</div>
            </div>
        </div>
        
        <div style="display: flex; gap: 10px;">
            <button id="install-dismiss-enhanced" style="
                padding: 12px 20px;
                background: rgba(255,255,255,0.15);
                border: 2px solid rgba(255,255,255,0.3);
                color: white;
                border-radius: 15px;
                cursor: pointer;
                flex: 1;
                font-weight: 600;
                font-size: 14px;
                transition: all 0.2s;
            ">Not Now</button>
            
            <button id="install-accept-enhanced" style="
                padding: 12px 20px;
                background: white;
                color: var(--primary);
                border: none;
                border-radius: 15px;
                cursor: pointer;
                flex: 1;
                font-weight: 700;
                font-size: 14px;
                transition: all 0.2s;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
            ">
                <span>⬇️</span>
                <span>Install App</span>
            </button>
        </div>
        
        <div style="
            font-size: 11px;
            text-align: center;
            opacity: 0.8;
            margin-top: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        ">
            <span>🆓</span>
            <span>Free • No Ads • Works Offline</span>
        </div>
    `;
    
    document.body.appendChild(prompt);
    
    // Add event listeners
    document.getElementById('install-dismiss-enhanced').addEventListener('click', () => {
        prompt.style.animation = 'slideDownInstall 0.3s ease forwards';
        setTimeout(() => prompt.remove(), 300);
        localStorage.setItem('clearWordsInstallDismissed', 'true');
        localStorage.setItem('clearWordsInstallPromptTime', Date.now().toString());
    });
    
    document.getElementById('install-accept-enhanced').addEventListener('click', async () => {
        prompt.style.animation = 'slideDownInstall 0.3s ease forwards';
        setTimeout(() => prompt.remove(), 300);
        
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            
            console.log(`User ${outcome} the install prompt`);
            
            if (outcome === 'accepted') {
                // Show success message
                showToast('App installed successfully! 🎉');
                // Track installation
                if (window.trackEvent) {
                    window.trackEvent('pwa_install_accepted');
                }
            } else {
                // Track dismissal
                if (window.trackEvent) {
                    window.trackEvent('pwa_install_declined');
                }
            }
            
            deferredPrompt = null;
        }
    });
    
    // Add hover effects
    const dismissBtn = document.getElementById('install-dismiss-enhanced');
    const acceptBtn = document.getElementById('install-accept-enhanced');
    
    dismissBtn.addEventListener('mouseenter', () => {
        dismissBtn.style.background = 'rgba(255,255,255,0.25)';
    });
    dismissBtn.addEventListener('mouseleave', () => {
        dismissBtn.style.background = 'rgba(255,255,255,0.15)';
    });
    
    acceptBtn.addEventListener('mouseenter', () => {
        acceptBtn.style.transform = 'translateY(-2px)';
        acceptBtn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });
    acceptBtn.addEventListener('mouseleave', () => {
        acceptBtn.style.transform = 'translateY(0)';
        acceptBtn.style.boxShadow = 'none';
    });
    
    // Auto-dismiss after 30 seconds
    setTimeout(() => {
        if (document.body.contains(prompt)) {
            prompt.style.animation = 'slideDownInstall 0.3s ease forwards';
            setTimeout(() => prompt.remove(), 300);
        }
    }, 30000);
}

// Show install button in settings
function showInstallInSettings() {
    const settingsCard = document.querySelector('#settings .card');
    if (!settingsCard) return;
    
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
        // Already installed - show "Open in App" button
        const installedBtn = document.createElement('div');
        installedBtn.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 15px 0;
            padding: 16px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent1) 100%);
            border-radius: 12px;
            color: white;
            cursor: pointer;
            transition: transform 0.2s;
        `;
        installedBtn.innerHTML = `
            <div>
                <div style="font-weight: 600; font-size: 16px;">🎉 App Installed</div>
                <div style="font-size: 12px; opacity: 0.9;">ClearWords is running as a standalone app</div>
            </div>
            <div style="font-size: 20px;">✅</div>
        `;
        
        // Insert after first card
        settingsCard.parentNode.insertBefore(installedBtn, settingsCard.nextSibling);
        
        return;
    }
    
    // Not installed - show install button
    const installBtn = document.createElement('div');
    installBtn.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 15px 0;
        padding: 16px;
        background: var(--bg);
        border: 2px solid var(--border);
        border-radius: 12px;
        color: var(--text);
        cursor: pointer;
        transition: all 0.2s;
    `;
    installBtn.innerHTML = `
        <div>
            <div style="font-weight: 600; font-size: 16px; display: flex; align-items: center; gap: 10px;">
                <span>📱</span>
                <span>Get the App</span>
            </div>
            <div style="font-size: 12px; color: var(--text-secondary);">Install for better experience</div>
        </div>
        <div style="
            background: var(--primary);
            color: white;
            padding: 8px 16px;
            border-radius: 10px;
            font-size: 14px;
            font-weight: 600;
        ">Install</div>
    `;
    
    installBtn.addEventListener('click', () => {
        if (deferredPrompt) {
            showInstallPrompt();
        } else {
            showToast('Installation available on next visit. Please refresh the page.');
        }
    });
    
    installBtn.addEventListener('mouseenter', () => {
        installBtn.style.transform = 'translateY(-2px)';
        installBtn.style.borderColor = 'var(--primary)';
        installBtn.style.boxShadow = '0 4px 12px var(--shadow)';
    });
    
    installBtn.addEventListener('mouseleave', () => {
        installBtn.style.transform = 'translateY(0)';
        installBtn.style.borderColor = 'var(--border)';
        installBtn.style.boxShadow = 'none';
    });
    
    // Insert after first card
    settingsCard.parentNode.insertBefore(installBtn, settingsCard.nextSibling);
}

// Initialize platform detection
const platform = detectPlatform();

// Export platform info for main app
window.clearWordsPlatform = platform;

// Enhanced offline curriculum caching
async function cacheCurriculum(language) {
    if (!('caches' in window)) return;
    
    try {
        const cache = await caches.open('clearwords-data-v1.0.0');
        const languageConfig = window.languageConfigs?.[language];
        
        if (languageConfig && languageConfig.jsonFile) {
            // Use the correct path for JSON files
            const jsonPath = `/data/${languageConfig.jsonFile}`;
            const response = await fetch(jsonPath);
            if (response.ok) {
                await cache.put(jsonPath, response.clone());
                console.log(`Cached curriculum for ${language} from ${jsonPath}`);
            }
        }
    } catch (error) {
        console.warn('Curriculum caching failed:', error);
    }
}

// Export caching function
window.cacheCurriculum = cacheCurriculum;

// Enhanced analytics (privacy-friendly)
function trackEvent(eventName, data = {}) {
    if (window.location.hostname === 'localhost') {
        console.log('Event tracked:', eventName, data);
        return;
    }
    
    // Simple, privacy-friendly analytics
    const analyticsData = {
        event: eventName,
        timestamp: new Date().toISOString(),
        language: window.appState?.user?.language,
        segment: window.appState?.user?.segment,
        ...data
    };
    
    // Store locally for batch upload
    const analyticsQueue = JSON.parse(localStorage.getItem('clearWordsAnalytics') || '[]');
    analyticsQueue.push(analyticsData);
    localStorage.setItem('clearWordsAnalytics', JSON.stringify(analyticsQueue.slice(-100))); // Keep last 100 events
    
    // Try to send if online (in real implementation)
    if (isOnline && analyticsQueue.length > 10) {
        // This would be a real API call in production
        console.log('Would send analytics batch:', analyticsQueue.length, 'events');
        // localStorage.setItem('clearWordsAnalytics', '[]'); // Clear after successful send
    }
}

// Export analytics function
window.trackEvent = trackEvent;

// Auto-save functionality
let saveTimeout;
function scheduleAutoSave() {
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        if (window.saveState) {
            window.saveState();
            console.log('Auto-saved state');
            trackEvent('auto_save');
        }
    }, 30000); // Auto-save every 30 seconds
}

// Initialize auto-save
if (window.appState) {
    setInterval(scheduleAutoSave, 30000);
}

// Enhanced back button handling for PWA
if (platform.isPWA) {
    let backButtonPressCount = 0;
    
    window.addEventListener('popstate', (event) => {
        if (window.appState?.currentPage !== 'home') {
            // Navigate back within app
            if (window.showPage) {
                window.showPage('home');
            }
            history.pushState(null, '', window.location);
        } else {
            // Double tap to exit
            backButtonPressCount++;
            
            if (backButtonPressCount === 1) {
                // Show exit hint
                if (window.showToast) {
                    window.showToast('Press back again to exit');
                }
                
                setTimeout(() => {
                    backButtonPressCount = 0;
                }, 2000);
            } else if (backButtonPressCount === 2) {
                // Exit app
                if (window.navigator.app && window.navigator.app.exitApp) {
                    window.navigator.app.exitApp();
                }
            }
        }
    });
    
    // Prevent default back behavior
    history.pushState(null, '', window.location);
}

// Battery status detection (if available)
if ('getBattery' in navigator) {
    navigator.getBattery().then(battery => {
        function updateBatteryStatus() {
            const isLowBattery = battery.level < 0.2;
            
            if (isLowBattery && !battery.charging) {
                console.log('Low battery detected, optimizing for battery saving');
                // Could reduce animations, limit background processes, etc.
            }
        }
        
        battery.addEventListener('levelchange', updateBatteryStatus);
        battery.addEventListener('chargingchange', updateBatteryStatus);
        updateBatteryStatus();
    });
}

// Screen orientation handling
function handleOrientationChange() {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    
    if (isPortrait) {
        console.log('Portrait mode');
        // Adjust UI for portrait
    } else {
        console.log('Landscape mode');
        // Adjust UI for landscape
    }
}

window.addEventListener('orientationchange', handleOrientationChange);
handleOrientationChange(); // Initial check

// Enhanced logging for debugging
const originalConsoleLog = console.log;
console.log = function(...args) {
    if (window.location.hostname === 'localhost') {
        originalConsoleLog.apply(console, args);
    }
    // In production, only log errors and warnings
};

console.log("Enhanced PWA functionality loaded successfully");

// Toast notification helper
function showToast(message, duration = 3000) {
    // Remove existing toast
    const existingToast = document.getElementById('global-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--card-bg);
        color: var(--text);
        padding: 14px 24px;
        border-radius: 50px;
        z-index: 10002;
        box-shadow: 0 8px 32px var(--shadow);
        border: 1px solid var(--border);
        font-size: 14px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
        backdrop-filter: blur(10px);
        animation: toastSlideUp 0.3s ease;
        max-width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes toastSlideUp {
            from { 
                transform: translateX(-50%) translateY(20px);
                opacity: 0; 
            }
            to { 
                transform: translateX(-50%) translateY(0);
                opacity: 1; 
            }
        }
        @keyframes toastSlideDown {
            from { 
                transform: translateX(-50%) translateY(0);
                opacity: 1; 
            }
            to { 
                transform: translateX(-50%) translateY(20px);
                opacity: 0; 
            }
        }
    `;
    document.head.appendChild(style);
    
    toast.innerHTML = `
        <span>💡</span>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Auto-remove after duration
    setTimeout(() => {
        toast.style.animation = 'toastSlideDown 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, duration);
    
    // Make toast clickable to dismiss
    toast.addEventListener('click', () => {
        toast.style.animation = 'toastSlideDown 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    });
}

// Export utilities for main app
window.clearWordsUtils = {
    isOnline: () => isOnline,
    platform: platform,
    checkNetworkQuality,
    trackEvent,
    cacheCurriculum,
    showInstallPrompt,
    showUpdateNotification,
    showInstallInSettings,  // Add this
    showToast  // Add this
};
