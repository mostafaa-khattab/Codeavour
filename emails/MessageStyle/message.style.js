
export const sendCodeStyle = (code, userName = "mostafa") => {
    return ` <table border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout:fixed;background-color:#f9f9f9"
    id="bodyTable">
    <tbody>
        <tr>
            <td style="padding-right:10px;padding-left:10px;" align="center" valign="top" id="bodyCell">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="wrapperBody"
                    style="max-width:600px">
                    <tbody>
                        <tr>
                            <td align="center" valign="top">
                                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableCard"
                                    style="background-color:#fff;border-color:#e5e5e5;border-style:solid;border-width:0 1px 1px 1px;">
                                    <tbody>
                                        <tr>
                                            <td style="background-color:#00d2f4;font-size:1px;line-height:3px"
                                                class="topBorder" height="3">&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td style="padding-bottom: 20px;" align="center" valign="top"
                                                class="imgHero">
                                                <a style="text-decoration:none">
                                                    <img alt="" border="0"
                                                        src="http://email.aumfusion.com/vespro/img/hero-img/blue/heroGradient/user-reset-password.png"
                                                        style="width:100%;max-width:600px;height:auto;display:block;color: #f9f9f9;"
                                                        width="600">
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding-bottom: 5px; padding-left: 20px; padding-right: 20px;"
                                                align="center" valign="top" class="mainTitle">
                                                <h2 class="text"
                                                    style="color:#000;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:28px;font-weight:500;font-style:normal;letter-spacing:normal;line-height:36px;text-transform:none;text-align:center;padding:0;margin:0">
                                                    Hi ${userName}</h2>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding-left:20px;padding-right:20px;padding-top:20px"
                                                align="center" valign="top" class="containtTable ui-sortable">
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                                    class="tableDescription" style="">
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding-bottom: 20px;" align="center"
                                                                valign="top" class="description">
                                                                <p class="text"
                                                                    style="color:#666;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;font-style:normal;letter-spacing:normal;line-height:22px;text-transform:none;text-align:center;padding:0;margin:0">
                                                                    Plz Use this code to reset u password</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                                    class="tableButton" style="">
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding-top:20px;padding-bottom:40px"
                                                                align="center" valign="top">
                                                                <table border="0" cellpadding="0" cellspacing="0"
                                                                    align="center">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td style="background-color: rgb(0, 210, 244); padding: 15px 40px; border-radius: 50px;"
                                                                                align="center" class="ctaButton">
                                                                                <a style="color:#fff;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:30px;font-weight:600;font-style:normal;letter-spacing:1px;line-height:20px;text-transform:uppercase;text-decoration:none;display:block"
                                                                                    class="text">${code}</a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                                    class="tableDescription">
                                                    <tbody>
                                                        <tr>
                                                            <td style="padding-bottom: 25px;" align="center"
                                                                valign="top" class="description">
                                                                <p class="text"
                                                                    style="color:#fa031c;font-family:'Open Sans',Helvetica,Arial,sans-serif;font-size:16px;font-weight:700;font-style:normal;letter-spacing:normal;line-height:22px;text-transform:none;text-align:center;padding:0;margin:0">
                                                                    Plz note that this code will expire after <span
                                                                        style="color:#2754df;">2</span> min</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>`
}

export const confirmEmailStyle = (link) => {
    return `<html>

<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
<style type="text/css">
    body {
        background-color: #88BDBF;
        margin: 0px;
    }
</style>

<body style="margin:0px;">
    <table border="0" width="70%" style="margin:auto;padding:30px;background-color: #F3F3F3;border:1px solid teal;">
        <tr>
            <td>
                <table border="0" width="100%">
                    <tr>
                        <td>
                            <h1>
                                <img width="100px"
                                    src="https://res.cloudinary.com/dlbm6rfwr/image/upload/v1710635049/logo6_df2svv.jpg" />
                            </h1>
                        </td>
                        <td>
                            <p style="text-align: right;"><a href="${" https://saraha-seej.onrender.com/"}"
                                    target="_blank" style="text-decoration: none;">View In Website</a></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td>
                <table border="0" cellpadding="0" cellspacing="0"
                    style="text-align:center;width:100%;padding-bottom: 20px;background-color: #fff;">
                    <tr>
                        <td style="background-color:#66A7A1;height:60px;font-size:50px;color:#fff;">
                            <img width="50px" height="50px" style="padding-top: 10px;"
                                src="https://i.pinimg.com/originals/5b/16/1b/5b161b77a352ae26b52b56499601c1c0.jpg">
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1 style="padding-top:20px; color: teal">Account Login</h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p style="padding:0px 100px;">
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p><a href="${link}" target="_blank"
                                    style="cursor: pointer;text-decoration: none;font-weight: 900;margin:10px 0px 30px 0px;border-radius:4px;padding:10px 20px;border: 0;color:#fff;background-color:teal; ">
                                    Click To Continue Login In Website</a></p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>`
}