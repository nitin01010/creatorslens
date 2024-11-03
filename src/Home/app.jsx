import { Routes, Route } from "react-router-dom";
import HomePage from "./homePage";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import Blog from "../components/ui/blog";
import Pricing from "../components/ui/pricing";
import Signup from "../components/ui/signup";
import Login from "../components/ui/login";
import Dashboard from "../components/Private/dashboard";
import UserProfile from "../components/Private/userProfile";
import NoPage from "../components/ui/noPage";
import ProtectRoutes from "../privateRoute";
import PublicRoute from "../PublicRoute";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="blogs" element={ <Blog /> } />
                {/* <Route path="signup" element={ <Signup /> } /> */ }
                {/* <Route path="login" element={ <Login /> } /> */ }
                <Route path="pricing" element={ <Pricing /> } />
                <Route element={ <PublicRoute /> }>
                    <Route path="signup" element={ <Signup /> } />
                    <Route path="login" element={ <Login /> } />
                </Route>

                <Route element={ <ProtectRoutes /> }>
                    <Route path="dashboard" element={ <Dashboard /> } />
                    <Route path="profile" element={ <UserProfile /> } />
                </Route>

                <Route path="*" element={ <NoPage /> } />
            </Routes>
            <Footer />
        </div>
    )
}

export default App