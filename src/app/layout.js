import { NavLinks } from "./ui/nav-links";


export default function Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <NavLinks />
                <main>{children}</main>
            </body>
        </html>
    )
}