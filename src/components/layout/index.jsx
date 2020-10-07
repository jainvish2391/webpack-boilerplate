import React, { useState } from 'react'
import { withRouter } from 'react-router'

import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core/styles'

import Routes from '../../routes'
import { getTheme } from '../../utils/getTheme'

import { CssBaseline } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	content: {
		flexGrow: 1,
        padding: theme.spacing(3),
        marginTop: '108px',
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto'
	}
}))


const Layout = () => {

    const classes = useStyles()

    return (
        <ThemeProvider theme={getTheme()}>
            <CssBaseline />
            <div className={classes.root}>
                <div className={classes.content}>
                    <Routes />
                </div>
            </div>
        </ThemeProvider>
    )
}

export default withRouter(Layout)