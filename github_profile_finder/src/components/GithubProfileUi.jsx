import React from "react";

const GithubProfileUI = ({
  user,
  repos,
  search,
  setSearch,
  onKeyDown,
  error,
  loading,
  userBySearch,
}) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      {/* Search Bar */}
      <div className="w-full max-w-md mb-6 flex gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => onKeyDown(e)}
          placeholder="Search GitHub username..."
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => userBySearch(search)}
          className="px-2 py-1.5 cursor-pointer bg-blue-600 text-white rounded-sm"
        >
          Search
        </button>
      </div>

      {/* Conditional Rendering */}
      {user && repos.length > 0 ? (
        <>
          {/* Profile Card */}
          <div className="bg-white w-full max-w-4xl rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:items-start gap-6">
            <img
              src={user.avatar_url}
              alt="Avatar"
              className="w-32 h-32 rounded-full border"
            />

            <div className="flex-1 w-full">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center">
                <h2 className="text-2xl font-bold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline mt-2 sm:mt-0"
                >
                  View GitHub Profile
                </a>
              </div>

              <p className="text-gray-700 mt-2">{user.bio}</p>

              <div className="flex gap-4 mt-4 text-sm text-gray-600">
                <span>
                  👥 <strong>{user.followers}</strong>
                </span>
                <span>
                  📁 <strong>{user.public_repos}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Repositories List */}
          <div className="w-full max-w-4xl mt-6">
            <h3 className="text-xl font-semibold mb-4">Repositories</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repos.map((repo) => (
                <div key={repo.id} className="bg-white rounded-lg shadow p-4">
                  <h4 className="font-semibold text-lg">{repo.name}</h4>
                  <p className="text-sm text-gray-600 mt-1 mb-2">
                    {repo.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 gap-4">
                    <span>⭐ {repo.stargazers_count}</span>
                    <span>🍴 {repo.forks}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <p className="text-green-500">
          {loading ? "Loading..." : "search for user"}
        </p>
      )}
    </div>
  );
};

export default GithubProfileUI;
