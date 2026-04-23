import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mockMessages = [
  {
    id: 1,
    name: "John Doe",
    message: "This portfolio looks absolutely stunning! Great job on the clean design.",
    date: "April 23, 2026",
  },
  {
    id: 2,
    name: "Jane Smith",
    message: "Love the animations and the overall vibe. Very professional.",
    date: "April 21, 2026",
  },
];

export default function Guestbook() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-20 bg-card-bg min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <h1
              className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Guestbook
            </h1>
            <p className="text-muted text-lg">
              Leave a message for me and other visitors. Let me know you were here!
            </p>
          </div>

          {/* Sign In / Post Area */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border/50 shadow-sm mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Sign in to leave a message</h2>
            <button className="flex items-center gap-3 px-6 py-3 bg-[#24292e] text-white rounded-xl hover:bg-[#2c3238] transition-colors font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Sign in with GitHub
            </button>
            <p className="mt-4 text-sm text-muted">
              (This is a UI preview. To make it functional, we will need to connect a database like Supabase or Firebase.)
            </p>
          </div>

          {/* Messages */}
          <div className="space-y-6">
            {mockMessages.map((msg) => (
              <div key={msg.id} className="bg-white p-6 rounded-2xl border border-border/50 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold">
                    {msg.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{msg.name}</h3>
                    <p className="text-xs text-muted">{msg.date}</p>
                  </div>
                </div>
                <p className="text-muted leading-relaxed">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
