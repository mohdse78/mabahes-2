import {FormControl, InputLabel, OutlinedInput} from "@material-ui/core";

const SearchBox = ({set}) => {
    return (
        <FormControl fullWidth
                     style={{
                         maxWidth: 1100,
                         backgroundColor: "rgba(255,255,255,0.95)",
                         margin: 20,
                         borderRadius: 10,
                         border: "none"
                     }}
        >
            <InputLabel style={{marginLeft: 15}}>Search</InputLabel>
            <OutlinedInput
                onChange={e => set(e.target.value)}
                id="outlined-adornment-amount"
                label="Search"
            />
        </FormControl>
    )
}

export default SearchBox