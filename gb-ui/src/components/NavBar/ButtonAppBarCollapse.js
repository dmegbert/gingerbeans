import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Menu } from "@material-ui/core"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"


const useStyles = makeStyles((theme) => ({
  buttonCollapse: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    margin: "10px",
    boxShadow: "none",
  },
}))


const ButtonAppBarCollapse = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const classes = useStyles()
  const open = Boolean(anchorEl)

  return (
    <div className={classes.buttonCollapse}>
      <IconButton onClick={handleMenu}>
        <MenuIcon color="secondary" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        {props.children}
      </Menu>
    </div>
  )
}

export default ButtonAppBarCollapse
