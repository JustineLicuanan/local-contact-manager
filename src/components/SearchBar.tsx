import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) => {
	return createStyles({
		root: {
			padding: '2px 4px',
			display: 'flex',
			alignItems: 'center',
			width: 400,
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
	});
});

const SearchBar = () => {
	const classes = useStyles();

	return (
		<Box pb={6} display='flex' justifyContent='center'>
			<Paper component='form' className={classes.root}>
				<InputBase
					className={classes.input}
					placeholder='Search a contact...'
					inputProps={{ 'aria-label': 'search contact' }}
				/>
				<IconButton
					type='submit'
					className={classes.iconButton}
					aria-label='search'
				>
					<SearchIcon />
				</IconButton>
			</Paper>
		</Box>
	);
};

export default SearchBar;
