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
  const { classes } = props;

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={top100Films}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.title}
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

const top100Films = [{ title: "The Shawshank Redemption", year: 1994 }];

export default withStyles(style)(SearchBox);
