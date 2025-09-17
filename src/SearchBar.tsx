import type { ChangeEvent, FormEvent, KeyboardEvent } from "react";

export function SearchBar() {
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        console.log("Search query:", query);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log("Enter key pressed");
        } else if (e.key === "Escape") {
            console.log("Escape key pressed");
        }
        console.log("Key pressed:", e.key);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                placeholder="Search tracks..."
            />
        </form>
    );
}
//* Component of the search bar, realized as a form with input field and event handlers for form submission and input change (demonstrative example of event's typization). In handlers we should add a type for specific event and type of the HTML element, where this event happens. Such as onChange (ChangeEvent type on input element HTMLInputElement), onSubmit (FormEvent type on form element HTMLFormElement), onKeyDown (KeyboardEvent type on input element HTMLInputElement), etc.
