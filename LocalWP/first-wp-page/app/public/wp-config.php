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
define( 'AUTH_KEY',          'yf;`99Wv~f(@mql=yFXX9ZvN  SU0[vE>Ln<+9eYUS9ek=qL5[d6PxFvLXE2O,F=' );
define( 'SECURE_AUTH_KEY',   '&!vg&#drz7IvVuLMMJyR}TrQr`:|<aJV,K@xA:q5?NCoS`&Tjqhq_BE8U=Z.JPRh' );
define( 'LOGGED_IN_KEY',     '% TuirAB>u3`Yy(#?WMRRx~gKWPv}1fyK^<-Q=xJ{mw/]Aii|mR]#1<IOvJHDbmx' );
define( 'NONCE_KEY',         ')azB/^]_Z^oKK`il!XC@*)dKYmfN0lMl}XcH%ndE+k&}nRg37`doEy*TCI)@Vom{' );
define( 'AUTH_SALT',         '>25>g~E-i{?x}qeDt[b,&~*s%_V:nX#HPgg#ip^=zrrEL7_NIt]Svroc.SC7>Zl#' );
define( 'SECURE_AUTH_SALT',  'M7R.`}IFPHQhsqKu5R@6xJx/jSEFH!Ow*$E@7r=-=ldQd52N!+Ki}2/[XUIzc8HD' );
define( 'LOGGED_IN_SALT',    ']n%VG_!z!PfNB{e@LRl)o31|aX-7B+*S%SW=-GCk]30:*qqJ=O12)K0>8q }Kt|)' );
define( 'NONCE_SALT',        '!Ro6wXnJA:``o>O)8zo<%Zl?Bgi$&55 N%l8t>UG&>kH{R8X*F8-SpQwj)%z?dUV' );
define( 'WP_CACHE_KEY_SALT', '24GEquIkTgm[N2~5j1]HhOciqFf$/[Cc;F G.l/Ye!F3|=hfk7hrv9$.Vl@I)~Dd' );


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
