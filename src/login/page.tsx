import Image from "next/image";
export default function Login() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-[80vh] w-full max-w-3xl flex-col items-center justify-center py-12 px-16 bg-white dark:bg-black sm:items-center rounded-sm m-16">
        <Image
          className="dark:invert"
          src="/delivery.png"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <p>
          <i>Get your favourites by your own choice</i>
        </p>

        <form className="flex flex-col gap-4 w-full max-w-sm mt-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-zinc-800 dark:border-zinc-600 dark:text-zinc-50"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 dark:bg-zinc-800 dark:border-zinc-600 dark:text-zinc-50"
            required
          />
          <button
            type="submit"
            className="bg-teal-400 text-white border font-semibold py-2 px-4 rounded-md hover:bg-teal-500 hover:border-black dark:hover:border-black transition-colors"
          >
            Sign In
          </button>
        </form>
      </main>
    </div>
  );
}
