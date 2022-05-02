import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

export default function Component1() {
	const theme = useTheme();
	const classes = useStyles(theme);
	return (
		<div className={classes.root}>
			<Typography variant="h3"
						align="center"
						color="textPrimary"
			paragraph>
			This is a Child Component text.
		</Typography>
		</div>
	);
}
