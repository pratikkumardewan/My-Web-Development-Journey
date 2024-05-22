<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'QC2TaZs-O#oz234]><U9K]8cmcw-;tdLY<0&Su?oh1z0#[#*S=R;BK>O9Kg(Ra-y' );
define( 'SECURE_AUTH_KEY',   'L=]{0-QS7iD,DQ5 )R+L5ulagTnf8S|4BGOTSo!JF8zcbb=Z5~jDX(2:L.~*ZVg7' );
define( 'LOGGED_IN_KEY',     ';kAIVSflVu[zqqBx:3<eosHKkl-PlsaqQ[Mp}n!w iFejJc!m*hmX`?6<l4TUgzb' );
define( 'NONCE_KEY',         'ZAw[}V*ha6[H#Ak5La|5% PwAA/ PHSQvlo$NpzxQCW2TInGCyi<A1DwKaqub3)o' );
define( 'AUTH_SALT',         '+1di/9R3Z~O@+9GD0PRioX!2i-Jo@S9azv|`E|?C0w$,j,wl*v1|D/`s. {=_$yd' );
define( 'SECURE_AUTH_SALT',  '=K5#Ic@[<2bf8=S*G$5uUa?-=nC*)eG9oE[v2mmPP~p-99.d*a9uD5kL8<iPN=*q' );
define( 'LOGGED_IN_SALT',    '#G$;7s.(/y?RL_vt+{Q[uE>-T[(ZSZwKs9/2|]k3p)tm7ba68&;%77yOWLSS:0cR' );
define( 'NONCE_SALT',        '@!)H[;58k^qt6<Y6c_85 j3aD~6>b/9>f@WLlyowsqpyT99.QJWa#iL;pm?EAtOW' );
define( 'WP_CACHE_KEY_SALT', 'jJhj6M.IF`qm~-4;@82Y?FZ%Qf^0S&I%@WyzD *M nf8-R.Tn-e3-*N@:V(XmT.k' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
