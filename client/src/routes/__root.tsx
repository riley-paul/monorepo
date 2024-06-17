import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <nav className="h-[3.5rem] border-b flex items-center">
        <div className="container2 w-full flex items-center gap-2">
          <Link to="/">
            <h1 className="text-2xl font-bold">Title</h1>
          </Link>
        </div>
      </nav>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
