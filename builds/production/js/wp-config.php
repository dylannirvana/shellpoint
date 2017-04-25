<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'i2660059_wp1');

/** MySQL database username */
define('DB_USER', 'i2660059_wp1');

/** MySQL database password */
define('DB_PASSWORD', 'P.7@w0tlVYUUuo3l9S.13([3');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'jYfTG9fq1GV4MZowrCyAWMqaMG2Aw9Oh8SmBier8UKSyCCe5zE464MN2tHuOhcIf');
define('SECURE_AUTH_KEY',  'Zix8BrWjrPkU5ydcMFflkTndTriQF1cNz33zXvOMqsAzpEWm4JAq6rD3JiTZa19K');
define('LOGGED_IN_KEY',    '59yKMAQN0AzopFZ67CH8oU8iMkSo9o4gPg4uxgMtN1WHNU8eo6QBEn4DNwplLmOI');
define('NONCE_KEY',        'TS8TptcPbAkOxG5sPdnYszScH7ZkayjRe19tXoxqjds4Thl51kllCiJ3uiclEWpc');
define('AUTH_SALT',        'jCoLtxcmM2gohXkKgOQR1GE7614ozGz0UJd41EFWPt2M07NqFr9DzM3LpV8L59U0');
define('SECURE_AUTH_SALT', 'CrCRXz9uc2eMzpbkdiHwKsyqSNMa380tIiyjkAgO1mDJDwOl3HCN1JX4JC7czvAm');
define('LOGGED_IN_SALT',   'yXELDoPqSrvfrTmzp9wrBPmgi0m2uMeKxB86vQnmr7rpqKPmUQuMpsEdaQs7RQFc');
define('NONCE_SALT',       'hqQxpfpSfLjCdrdbLFEtYk6c0UkOHKkx88O1xo852SaQSdRdRuFGSzeeR48a0Rfj');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
