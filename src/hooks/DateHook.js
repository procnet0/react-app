import * as React from "react";

/**
 * @return {string}
 */
function DateHook() {
    const [today, setDate] = React.useState(new Date().toLocaleTimeString());
    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
            // This will trigger a rerender every component that uses the useDate hook.
            setDate(new Date().toLocaleTimeString());
        }, 10);
        return () => {
            clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
        }
    }, []);
    return today;
}

export default DateHook;
