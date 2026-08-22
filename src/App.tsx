const communityProjects = [
  {
    title: 'Quran.com API',
    description: 'A comprehensive Quran API powering search, translations, and recitations for developers.',
    url: 'https://github.com/quran/quran.com-api',
  },
  {
    title: 'Aladhan',
    description: 'Reliable Islamic prayer times API with support for multiple calculation methods worldwide.',
    url: 'https://github.com/islamic-network/api.aladhan.com',
  },
  {
    title: 'Islamic Network',
    description: 'Open data and APIs for Quran, Hadith, prayer times, and other Islamic resources.',
    url: 'https://github.com/islamic-network',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-100 text-gray-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 py-12 sm:px-6 lg:px-8">
        <header className="rounded-3xl border border-emerald-100 bg-white/90 p-8 text-center shadow-sm backdrop-blur-sm sm:p-10">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">MuslimHub</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            A central directory for open-source Islamic applications and developer resources.
          </p>
        </header>

        <section aria-labelledby="featured-app" className="rounded-3xl bg-emerald-700 p-8 text-emerald-50 shadow-lg sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-100">Featured App</p>
          <h2 id="featured-app" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Quran Audio Tracker
          </h2>
          <p className="mt-4 max-w-2xl text-emerald-100">
            A Progressive Web App to track and manage your daily Quran listening and memorization.
          </p>
          <a
            href="https://github.com/mahmoud-ferig/Quran-Audio-Tracker-PWA-"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            View Project
          </a>
        </section>

        <section aria-labelledby="community-projects" className="space-y-6">
          <h2 id="community-projects" className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Community Open Source
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {communityProjects.map((project) => (
              <article
                key={project.title}
                className="flex h-full flex-col rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{project.description}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800"
                >
                  View on GitHub
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
