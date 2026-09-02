// Lazy-loading category data manager
// This file implements dynamic import of category-specific data to reduce initial bundle size

import { organizations, states, recruitments, makeCategory } from './shared.js';

// Cache for loaded categories to avoid re-importing
const categoryCache = new Map();

// Map of category slugs to their dynamic import paths
// This enables code-splitting at the bundle level
const categoryModules = {
    // Main categories from jobs.js
    police: () => import('../jobs.js?category=police'),
    railway: () => import('../jobs.js?category=railway'),
    ssc: () => import('../jobs.js?category=ssc'),
    upsc: () => import('../jobs.js?category=upsc'),
    
    // Expanded categories from governmentData.js
    banking: () => import('../governmentData.js?category=banking'),
    defence: () => import('../governmentData.js?category=defence'),
    teaching: () => import('../governmentData.js?category=teaching'),
    postal: () => import('../governmentData.js?category=postal'),
    drdo: () => import('../governmentData.js?category=drdo'),
    isro: () => import('../governmentData.js?category=isro'),
    psu: () => import('../governmentData.js?category=psu'),
    judiciary: () => import('../governmentData.js?category=judiciary'),
    'technical-jobs': () => import('../governmentData.js?category=technical-jobs'),
    'medical-jobs': () => import('../governmentData.js?category=medical-jobs'),
    'clerk-jobs': () => import('../governmentData.js?category=clerk-jobs'),
    'state-government': () => import('../governmentData.js?category=state-government'),
    'other-government-jobs': () => import('../governmentData.js?category=other-government-jobs'),
};

/**
 * Load category data asynchronously
 * Returns cached result on subsequent calls to avoid re-imports
 * 
 * @param {string} categorySlug - The category slug (e.g., 'railway', 'police')
 * @returns {Promise<Object|null>} - The category object or null if not found
 */
export async function loadCategory(categorySlug) {
    // Check cache first
    if (categoryCache.has(categorySlug)) {
        return categoryCache.get(categorySlug);
    }
    
    // Check if module loader exists
    if (!categoryModules[categorySlug]) {
        console.warn(`Category loader not found for: ${categorySlug}`);
        return null;
    }
    
    try {
        // Dynamically import the category data
        const module = await categoryModules[categorySlug]();
        const categoryData = module[categorySlug] || module.default;
        
        // Cache the result
        if (categoryData) {
            categoryCache.set(categorySlug, categoryData);
        }
        
        return categoryData || null;
    } catch (error) {
        console.error(`Failed to load category data for ${categorySlug}:`, error);
        return null;
    }
}

/**
 * Load multiple categories in parallel
 * Useful for pre-loading related categories
 * 
 * @param {string[]} slugs - Array of category slugs
 * @returns {Promise<Map>} - Map of slug -> category data
 */
export async function loadCategories(slugs) {
    const results = new Map();
    const promises = slugs.map(slug =>
        loadCategory(slug).then(data => {
            if (data) results.set(slug, data);
        })
    );
    
    await Promise.all(promises);
    return results;
}

/**
 * Preload critical categories (homepage categories)
 * Called on app initialization to warm up cache
 */
export async function preloadCriticalCategories() {
    const criticalCategories = ['police', 'railway', 'ssc', 'upsc'];
    return loadCategories(criticalCategories);
}

/**
 * Check if a category is loaded in cache
 * @param {string} slug - Category slug
 * @returns {boolean} - True if category is already loaded
 */
export function isCategoryLoaded(slug) {
    return categoryCache.has(slug);
}

export { organizations, states, recruitments, makeCategory };
