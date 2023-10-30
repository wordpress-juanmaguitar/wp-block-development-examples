import './index.css';
import './style.css';
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';

registerBlockType( 'wp-block-development-examples/counter-jquery-99def1', {
	edit: Edit,
	save: Save,
} );
