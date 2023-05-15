/**
 * 400	BadRequest
 * 401	Unauthorized
 * 402	PaymentRequired
 * 403	Forbidden
 * 404	NotFound
 * 405	MethodNotAllowed
 * 406	NotAcceptable
 * 407	ProxyAuthenticationRequired
 * 408	RequestTimeout
 * 409	Conflict
 * 410	Gone
 * 411	LengthRequired
 * 412	PreconditionFailed
 * 413	PayloadTooLarge
 * 414	URITooLong
 * 415	UnsupportedMediaType
 * 416	RangeNotSatisfiable
 * 417	ExpectationFailed
 * 418	ImATeapot
 * 421	MisdirectedRequest
 * 422	UnprocessableEntity
 * 423	Locked
 * 424	FailedDependency
 * 425	TooEarly
 * 426	UpgradeRequired
 * 428	PreconditionRequired
 * 429	TooManyRequests
 * 431	RequestHeaderFieldsTooLarge
 * 451	UnavailableForLegalReasons
 * 500	InternalServerError
 * 501	NotImplemented
 * 502	BadGateway
 * 503	ServiceUnavailable
 * 504	GatewayTimeout
 * 505	HTTPVersionNotSupported
 * 506	VariantAlsoNegotiates
 * 507	InsufficientStorage
 * 508	LoopDetected
 * 509	BandwidthLimitExceeded
 * 510	NotExtended
 * 511	NetworkAuthenticationRequired
 */
import createError from "http-errors";

// GENERIC ERRORS

export const BadRequest = createError(400, "Bad Request");
export const Unauthorized = createError(401, "Unauthorized");
export const Forbidden = createError(403, "Forbidden");
export const NotFound = createError(404, "Not Found");
export const Conflict = createError(409, "Record Already Exists");
export const InternalServerError = createError(500, "Internal Server Error");

// DATABASE ERRORS

export const DatabaseMissingURI = createError(500, "Missing Database URI");

// API ERRORS

export const NotImplemented = createError(501, "Not Implemented");
export const UserAssetMissing = createError(401, "No matching user document found");
export const RewardNotFound = createError(404, "Reward Not Found");
export const RewardAlreadyUsed = createError(409, "Reward Already Used");
export const CollectorCardNotFound = createError(404, "Collector Card Not Found");
export const CoinbaseAPIError = createError(500, "Coinbase API Error");
