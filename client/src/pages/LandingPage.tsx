import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function LandingPage() {
    return (
        <div className="my-24 flex flex-col gap-2">
            <Button>
                <Link to="/page1">page1</Link>
            </Button>
            <Button>
                <Link to="/page2">page2</Link>
            </Button>
            <Button>
                <Link to="/mix">mix</Link>
            </Button>
        </div>
    );
}
