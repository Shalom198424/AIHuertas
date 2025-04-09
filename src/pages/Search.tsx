import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import TipCard from "@/components/tips/TipCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Search as SearchIcon } from "lucide-react";

interface SearchResult {
  type: "tip" | "forum" | "user";
  id: string;
  title: string;
  description?: string;
  image?: string;
  category?: string;
  rating?: number;
  replies?: number;
  lastActivity?: string;
  username?: string;
  avatar?: string;
}

const Search = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [results, setResults] = useState<SearchResult[]>([]);

  // Parse search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("q") || "";
    setSearchQuery(query);
    if (query) {
      performSearch(query);
    }
  }, [location.search]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
    // Update URL with search query
    const url = new URL(window.location.href);
    url.searchParams.set("q", searchQuery);
    window.history.pushState({}, "", url);
  };

  const performSearch = (query: string) => {
    // This would normally be an API call
    // For demo purposes, we'll use mock data
    const mockResults: SearchResult[] = [
      {
        type: "tip",
        id: "1",
        title: "Growing Tomatoes in Small Spaces",
        description:
          "Learn how to grow delicious tomatoes even if you only have a small balcony or patio.",
        image:
          "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=80",
        category: "Vegetables",
        rating: 4.5,
      },
      {
        type: "tip",
        id: "2",
        title: "Herb Garden Essentials",
        description:
          "Discover the essential herbs every gardener should grow and how to maintain them.",
        image:
          "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=800&q=80",
        category: "Herbs",
        rating: 4.8,
      },
      {
        type: "forum",
        id: "1",
        title: "How to improve soil quality naturally?",
        description:
          "I've been trying to improve my garden soil without chemicals. Has anyone had success with coffee grounds or eggshells?",
        category: "Soil & Composting",
        replies: 24,
        lastActivity: "2 hours ago",
      },
      {
        type: "forum",
        id: "2",
        title: "Best vegetables for beginners?",
        description:
          "I'm new to gardening and want to start with easy vegetables. What are your recommendations for a first-time gardener?",
        category: "Getting Started",
        replies: 18,
        lastActivity: "5 hours ago",
      },
      {
        type: "user",
        id: "1",
        title: "GardenExpert",
        username: "GardenExpert",
        description:
          "Passionate gardener with 10 years of experience in urban gardening.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GardenExpert",
      },
    ];

    // Filter results based on search query
    const filtered = mockResults.filter(
      (result) =>
        result.title.toLowerCase().includes(query.toLowerCase()) ||
        (result.description &&
          result.description.toLowerCase().includes(query.toLowerCase())),
    );

    setResults(filtered);
  };

  const filteredResults =
    activeTab === "all"
      ? results
      : results.filter((result) => result.type === activeTab);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-3xl font-bold text-center mb-6">Search Results</h1>

        <form onSubmit={handleSearch} className="relative mb-8">
          <Input
            type="text"
            placeholder="Search for tips, discussions, or users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-12"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-1 top-1 h-8 w-8 bg-green-600 hover:bg-green-700"
          >
            <SearchIcon className="h-4 w-4 text-white" />
          </Button>
        </form>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="w-full grid grid-cols-4 mb-8">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              All Results
            </TabsTrigger>
            <TabsTrigger value="tip" onClick={() => setActiveTab("tip")}>
              Tips
            </TabsTrigger>
            <TabsTrigger value="forum" onClick={() => setActiveTab("forum")}>
              Forum
            </TabsTrigger>
            <TabsTrigger value="user" onClick={() => setActiveTab("user")}>
              Users
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {renderResults(filteredResults)}
          </TabsContent>

          <TabsContent value="tip" className="space-y-6">
            {renderResults(filteredResults)}
          </TabsContent>

          <TabsContent value="forum" className="space-y-6">
            {renderResults(filteredResults)}
          </TabsContent>

          <TabsContent value="user" className="space-y-6">
            {renderResults(filteredResults)}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const renderResults = (results: SearchResult[]) => {
  if (results.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
        <h3 className="text-xl font-medium text-gray-700 mb-2">
          No results found
        </h3>
        <p className="text-gray-500">Try adjusting your search terms</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {results.map((result) => {
        if (result.type === "tip") {
          return (
            <TipCard
              key={`${result.type}-${result.id}`}
              id={result.id}
              title={result.title}
              description={result.description || ""}
              image={result.image || ""}
              category={result.category || ""}
              rating={result.rating || 0}
              isSaved={false}
            />
          );
        }

        if (result.type === "forum") {
          return (
            <Card
              key={`${result.type}-${result.id}`}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-lg hover:text-green-600 transition-colors cursor-pointer">
                  {result.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  {result.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{result.replies} replies</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>{result.lastActivity}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        }

        if (result.type === "user") {
          return (
            <Card
              key={`${result.type}-${result.id}`}
              className="hover:shadow-md transition-shadow"
            >
              <CardContent className="flex items-center p-4">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={result.avatar}
                    alt={result.username}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium">{result.username}</h3>
                  <p className="text-sm text-gray-600">{result.description}</p>
                </div>
              </CardContent>
            </Card>
          );
        }

        return null;
      })}
    </div>
  );
};

export default Search;
