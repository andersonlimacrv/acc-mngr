import { motion } from "framer-motion";

export function CodeShowcase() {
  const codeSnippet = `import { AccMngr } from '@acc-mngr/node';

const auth = new AccMngr({
  secretKey: process.env.ACCMNGR_SECRET_KEY,
  environment: 'production'
});

export async function middleware(req: Request) {
  const session = await auth.verifySession(req);
  
  if (!session.isValid) {
    return new Response('Unauthorized', { status: 401 });
  }

  // Cryptographically verified identity
  req.user = session.user;
  return next();
}`;

  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-sans">
              Three lines of code.<br />
              <span className="text-primary">Military-grade security.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We've abstracted the complexity of modern identity management into a clean, typed SDK. No more wrestling with JWTs, refresh tokens, or OAuth flows.
            </p>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary"></div>
                <span className="text-foreground">Edge-compatible runtime</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary"></div>
                <span className="text-foreground">Zero-trust architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary"></div>
                <span className="text-foreground">Automated key rotation</span>
              </li>
            </ul>
          </div>
          
          <div className="flex-1 w-full max-w-xl">
            <div className="border border-border rounded-md bg-[#0d1117] overflow-hidden shadow-xl">
              <div className="flex items-center px-4 py-2 border-b border-white/10 bg-[#161b22]">
                <div className="font-mono text-xs text-white/50">middleware.ts</div>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm leading-loose">
                  <code className="text-white/80">
                    <span className="text-blue-400">import</span> {"{ AccMngr }"} <span className="text-blue-400">from</span> <span className="text-green-400">'@acc-mngr/node'</span>;<br/><br/>
                    <span className="text-blue-400">const</span> auth = <span className="text-blue-400">new</span> <span className="text-yellow-200">AccMngr</span>({"{"}<br/>
                    {"  "}secretKey: process.env.<span className="text-purple-400">ACCMNGR_SECRET_KEY</span>,<br/>
                    {"  "}environment: <span className="text-green-400">'production'</span><br/>
                    {"}"});<br/><br/>
                    <span className="text-blue-400">export async function</span> <span className="text-yellow-200">middleware</span>(req: <span className="text-orange-300">Request</span>) {"{"}<br/>
                    {"  "}<span className="text-blue-400">const</span> session = <span className="text-blue-400">await</span> auth.<span className="text-yellow-200">verifySession</span>(req);<br/><br/>
                    {"  "}<span className="text-blue-400">if</span> (!session.isValid) {"{"}<br/>
                    {"    "}<span className="text-blue-400">return new</span> <span className="text-yellow-200">Response</span>(<span className="text-green-400">'Unauthorized'</span>, {"{ "}status: <span className="text-purple-400">401</span> {"}"});<br/>
                    {"  "}{"}"}<br/><br/>
                    {"  "}<span className="text-gray-500">// Cryptographically verified identity</span><br/>
                    {"  "}req.user = session.user;<br/>
                    {"  "}<span className="text-blue-400">return</span> <span className="text-yellow-200">next</span>();<br/>
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
