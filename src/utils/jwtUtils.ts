import * as jose from 'jose'

interface JwtPayload {
    email: string;
    roomTypeId: string;
    exp: number;
}

export async function validateAndExtractToken(token: string, base64SecretKey: string): Promise<JwtPayload> {
    try {
        const secretKeyBytes = Uint8Array.from(atob(base64SecretKey), c => c.charCodeAt(0));

        const algorithm = {
            name: 'HMAC',
            hash: 'SHA-256',
        };


        const secretKey = await crypto.subtle.importKey(
            'raw',
            secretKeyBytes,
            algorithm,
            false,
            ['sign', 'verify']
        );

        const { payload } = await jose.jwtVerify(token, secretKey);

        const { email, roomTypeId, exp } = payload as JwtPayload;

        return { email, roomTypeId, exp };
    } catch (error) {
        throw new Error("Token Validation Failed")
    }
}