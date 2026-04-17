const STORE_KEY = 'interviewmaxxing_signup_state';

const getSignupState = () => {
    const defaultState = {
        plan: null,
        billing: 'monthly',
        role: null,
        formats: [],
        challenge: null,
        experience: '1',
        language: 'English',
        promoCode: null,
        discount: 0
    };
    try {
        const data = localStorage.getItem(STORE_KEY);
        return data ? { ...defaultState, ...JSON.parse(data) } : defaultState;
    } catch {
        return defaultState;
    }
};

const updateSignupState = (updates) => {
    const currentState = getSignupState();
    const newState = { ...currentState, ...updates };
    localStorage.setItem(STORE_KEY, JSON.stringify(newState));
    return newState;
};

// Pricing logic attached to state
const PLANS = {
    starter: { name: 'FREE FOREVER', costMonthly: 0, costAnnual: 0, credits: '1 Mock Session / Mo' },
    maxxer: { name: 'MAXXER', costMonthly: 499, costAnnual: 399, credits: 'Unlimited AI Mocks' },
    lockedin: { name: 'ELITE TIER', costMonthly: 999, costAnnual: 799, credits: 'Priority Servers + 1-on-1' }
};

window.SignupStore = {
    getState: getSignupState,
    updateState: updateSignupState,
    PLANS
};
