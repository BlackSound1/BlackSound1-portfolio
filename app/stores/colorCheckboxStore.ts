let isChecked = false;
const listeners: Set<() => void> = new Set();

export const CheckBoxStore = {
    getIsChecked() {
        return isChecked;
    },
    toggleIsChecked() {
        isChecked = !isChecked;
        listeners.forEach(l => l());
    },
    subscribe(cb: () => void) {
        listeners.add(cb);
        return () => {
            listeners.delete(cb);
        }
    },
}

