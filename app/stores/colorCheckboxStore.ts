let isChecked = typeof window !== "undefined" ? sessionStorage.getItem('sc-color-checkbox') === "true" : false;
const listeners: Set<() => void> = new Set();

export const CheckBoxStore = {
    /**
     * Get whether the color checkbox is checked
     * @returns Whether the checkbox is checked
     */
    getIsChecked() {
        return isChecked;
    },
    /**
     * Toggle the state of the color checkbox.
     * This will also trigger all registered listeners.
     */
    toggleIsChecked() {
        isChecked = !isChecked;
        // Persist value
        if (typeof window !== "undefined") {
            sessionStorage.setItem('sc-color-checkbox', String(isChecked));
        }
        listeners.forEach(l => l());
    },
    /**
     * Subscribe to the color checkbox state change event.
     * @param cb The callback function to be called when the state of the color checkbox changes.
     * @returns A function to unsubscribe from the event.
     */
    subscribe(cb: () => void): () => void {
        listeners.add(cb);
        return () => {
            listeners.delete(cb);
        }
    },
}

