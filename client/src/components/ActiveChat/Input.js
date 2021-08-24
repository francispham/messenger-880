import React, { useState } from "react";
import { 
  FormControl, 
  FilledInput,
  IconButton,
} from "@material-ui/core";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

import { postMessage, uploadImage } from "../../store/utils/thunkCreators";
import { ImagesList } from "../ActiveChat";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
    position: "relative",
  },
  input: {
    height: 70,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: "#F4F6FA",
  },
  fileInput: {
    display: "none",
  },
  label: {
    position: "absolute",
    top: 12,
    right: 0,
  } 
}));

const Input = (props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);
  const { postMessage, otherUser, conversationId, user } = props;

  const handleChange = (event) => {
    const { target } = event;
    if(!!target.files) {
      const newFiles = [...files];
      newFiles.push(target.files[0]);
      setFiles(newFiles);
    } else {
      setText(target.value);
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const returnImages = await Promise.all(
      files.map(async (file) => uploadImage(file))
    );
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: returnImages || [],
    };
    await postMessage(reqBody);
    setText("");
    setFiles([]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <ImagesList imageFiles={files} />
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
        />
      <input 
        accept="image/*" 
        className={classes.fileInput} 
        id="icon-button-file" 
        type="file"
        name="file"
        onChange={handleChange} 
      />
      <label htmlFor="icon-button-file" className={classes.label}>
        <IconButton color="secondary" aria-label="upload picture" component="span">
          <FileCopyOutlinedIcon />
        </IconButton>
      </label>
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
