import cookie from "cookie";
import { TOKEN_NAME } from "...";

export default (req, res) => {
    const { expiresIn, accessToken, refreshToken } = req.body;

    const cookieObj = {
        expiresIn,
        accessToken,
        refreshToken,
    };

    res.setHeader(
        "Set-Cookie",
        cookie.serialize(TOKEN_NAME, JSON.stringify(cookieObj), {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: expiresIn,
            sameSite: "strict",
            path: "/",
        })
    );
    res.status(200).json({ success: true });
};