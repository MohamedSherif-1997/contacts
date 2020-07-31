import React from "react";
import PropTypes from "prop-types";

import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";

const style = {
  searchBox: {
    width: 200,
  },
};

const filter = createFilterOptions();

function SearchBox(props) {
  const [value, setValue] = React.useState(null);
  const { classes, contactsDetails, onHandleSearch } = props;

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue.name);
          onHandleSearch(newValue.name);
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              name: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={contactsDetails}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.name;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.name}
        freeSolo
        className={classes.searchBox}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Here.."
            variant="outlined"
            color="secondary"
          />
        )}
      />
    </div>
  );
}

SearchBox.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(style)(SearchBox);
