export const config = {
	url: process.env.WALLET_BACKEND_URL || "SERVICE_URL",
	port: process.env.WALLET_BACKEND_PORT || "SERVICE_PORT", 
	appSecret: process.env.WALLET_BACKEND_SECRET || "SERVICE_SECRET",
	db: {
		host: process.env.WALLET_BACKEND_DATABASE_HOST || "DB_HOST",
		port: process.env.WALLET_BACKEND_DATABASE_PORT || "DB_PORT", 
		username: process.env.WALLET_BACKEND_DATABASE_USERNAME || "DB_USER",
		password: process.env.WALLET_BACKEND_DATABASE_PASSWORD || "DB_PASSWORD",
		dbname: process.env.WALLET_BACKEND_DATABASE_NAME || "DB_NAME"
	},
	walletClientUrl: process.env.WALLET_BACKEND_CLIENT__URL || "WALLET_CLIENT_URL",
	webauthn: {
		attestation: process.env.WALLET_BACKEND_WEBAUTHN__ATTESTATION || "direct",
		origin: process.env.WALLET_BACKEND_WEBAUTHN__ORIGIN || "WEBAUTHN_ORIGIN",
		rp: {
			id: process.env.WALLET_BACKEND_WEBAUTHN_RP__ID || "WEBAUTHN_RP_ID",
			name: process.env.WALLET_BACKEND_WEBAUTHN_RP__NAME || "wwWallet demo",
		},
	},
	alg: process.env.WALLET_BACKEND_ALG || "EdDSA",
	notifications: {
		enabled: process.env.WALLET_BACKEND_NOTIFICATIONS__ENABLED || "NOTIFICATIONS_ENABLED",
		serviceAccount: process.env.WALLET_BACKEND_NOTIFICATIONS__SERVICEACCOUNT || "firebaseConfig.json"
	}
}
