<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Mediation Requests</title>
                <style>
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h2>Mediation Requests</h2>
                <table>
                    <tr>
                        <th>Full Name</th>
                        <th>Phone</th>
                        <th>Contact Methods</th>
                        <th>Problem Description</th>
                    </tr>
                    <xsl:for-each select="mediation_requests/request">
                        <tr>
                            <td><xsl:value-of select="full_name"/></td>
                            <td><xsl:value-of select="phone"/></td>
                            <td>
                                <xsl:if test="contact_methods/telegram = 'true'">Telegram </xsl:if>
                                <xsl:if test="contact_methods/facebook = 'true'">Facebook </xsl:if>
                                <xsl:if test="contact_methods/whatsapp = 'true'">WhatsApp</xsl:if>
                            </td>
                            <td><xsl:value-of select="problem_description"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet> 