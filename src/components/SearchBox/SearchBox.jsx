import { useState } from "react";
import { SearchForm, SearchBtn, FormInput } from "./SearchBox.styled";


export const SearchBox = ({ onSubmit }) => {
    const [movieName, setMovieName] = useState('');
    const handleChange = evt => {
        setMovieName(evt.currentTarget.value.toLowerCase());
    };
    const handleSubmit = e => {

        e.preventDefault();
        onSubmit(movieName)
        setMovieName('');
    }
    return (
        <SearchForm onSubmit={handleSubmit}>
            <SearchBtn type="submit">
                Search
            </SearchBtn>

            <FormInput
                onChange={handleChange}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="imageName"
                value={movieName} />
        </SearchForm>
    )
}