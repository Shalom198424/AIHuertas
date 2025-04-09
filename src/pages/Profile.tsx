import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import TipCard from "@/components/tips/TipCard";
import { MessageSquare, Settings, User, BookOpen, Heart } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");

  // Mock user data
  const userData = {
    username: "Huertera Agroecologica",
    name: "Sandra Vela",
    bio: "Huertera Agroecologica con mas de 10 años de experiencia en el cultivo de verduras y hierbas. ¡Me encanta compartir consejos y aprender de la comunidad!",
    location: "Bahia Blanca, Bs. As.",
    joinDate: "Abril 2025",
    avatarUrl: "https://i.imgur.com/Rgw9cPu.jpeg",
    coverImage:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=1200&q=80",
    stats: {
      tips: 12,
      posts: 48,
      likes: 156,
      followers: 89,
    },
    interests: [
      "Verduras",
      "Hierbas",
      "Huerta urbana",
      "Sustentabilidad",
      "Agroecologia",
    ],
    savedTips: [
      {
        id: "1",
        title: "Growing Tomatoes in Small Spaces",
        description:
          "Learn how to grow delicious tomatoes even if you only have a small balcony or patio. These space-saving techniques will help you maximize your harvest.",
        image:
          "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=800&q=80",
        category: "Vegetables",
        rating: 4.5,
        isSaved: true,
      },
      {
        id: "5",
        title: "Natural Pest Control",
        description:
          "Keep pests away from your garden using natural methods that are safe for your plants, beneficial insects, and the environment.",
        image:
          "https://images.unsplash.com/photo-1599076480825-3afebd13a8a1?w=800&q=80",
        category: "Maintenance",
        rating: 4.6,
        isSaved: true,
      },
    ],
    recentPosts: [
      {
        id: "1",
        title: "My experience with companion planting",
        preview:
          "I've been experimenting with companion planting this season and wanted to share my results...",
        replies: 12,
        date: "2 days ago",
      },
      {
        id: "2",
        title: "Question about tomato leaf curl",
        preview:
          "My tomato plants are showing some leaf curl. I've attached photos. Has anyone dealt with this before?",
        replies: 8,
        date: "1 week ago",
      },
      {
        id: "3",
        title: "Success with vertical gardening",
        preview:
          "Just wanted to share my vertical gardening setup that has doubled my growing space on my small balcony...",
        replies: 15,
        date: "2 weeks ago",
      },
    ],
  };

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Profile Header */}
      <div className="relative mb-8">
        <div className="h-48 w-full rounded-t-lg overflow-hidden">
          <img
            src={userData.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -bottom-16 left-8">
          <Avatar className="h-32 w-32 border-4 border-white">
            <AvatarImage src={userData.avatarUrl} alt={userData.name} />
            <AvatarFallback className="text-2xl">
              {userData.name.substring(0, 2)}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="bg-white rounded-b-lg p-6 pt-20 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{userData.name}</h1>
              <p className="text-gray-500">@{userData.username}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <span className="mr-4">{userData.location}</span>
                <span>Joined {userData.joinDate}</span>
              </div>
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              <Settings className="h-4 w-4 mr-2" />
              Editar Perfil
            </Button>
          </div>

          <p className="mt-4 text-gray-700">{userData.bio}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {userData.interests.map((interest, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-green-100 text-green-800 hover:bg-green-200"
              >
                {interest}
              </Badge>
            ))}
          </div>

          <div className="flex mt-6 border-t border-gray-200 pt-4">
            <div className="text-center mr-8">
              <p className="font-bold text-xl">{userData.stats.tips}</p>
              <p className="text-gray-500 text-sm">Consejos</p>
            </div>
            <div className="text-center mr-8">
              <p className="font-bold text-xl">{userData.stats.posts}</p>
              <p className="text-gray-500 text-sm">Mensajes</p>
            </div>
            <div className="text-center mr-8">
              <p className="font-bold text-xl">{userData.stats.likes}</p>
              <p className="text-gray-500 text-sm">Guardado</p>
            </div>
            <div className="text-center">
              <p className="font-bold text-xl">{userData.stats.followers}</p>
              <p className="text-gray-500 text-sm">Seguidores</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-4 mb-8">
          <TabsTrigger
            value="profile"
            onClick={() => setActiveTab("profile")}
            className="flex items-center"
          >
            <User className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Perfil</span>
          </TabsTrigger>
          <TabsTrigger
            value="Consejos"
            onClick={() => setActiveTab("tips")}
            className="flex items-center"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Consejos</span>
          </TabsTrigger>
          <TabsTrigger
            value="posts"
            onClick={() => setActiveTab("posts")}
            className="flex items-center"
          >
            <MessageSquare className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Mensajes</span>
          </TabsTrigger>
          <TabsTrigger
            value="saved"
            onClick={() => setActiveTab("saved")}
            className="flex items-center"
          >
            <Heart className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Guardado</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informacion del perfil</CardTitle>
              <CardDescription>
                Actualiza tu información personal
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nombre completo</Label>
                  <Input id="fullName" defaultValue={userData.name} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Nombre de usuario</Label>
                  <Input id="username" defaultValue={userData.username} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="alex.johnson@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Ubicacion</Label>
                  <Input id="location" defaultValue={userData.location} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" defaultValue={userData.bio} rows={4} />
              </div>
              <Button className="bg-green-600 hover:bg-green-700">
                Guardar cambios
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tips">
          <h2 className="text-2xl font-bold mb-6">My Tips</h2>
          {userData.savedTips.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userData.savedTips.map((tip) => (
                <TipCard key={tip.id} {...tip} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No tips yet
              </h3>
              <p className="text-gray-500 mb-4">
                You haven't created any gardening tips yet
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                Create Your First Tip
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="posts">
          <h2 className="text-2xl font-bold mb-6">My Forum Posts</h2>
          {userData.recentPosts.length > 0 ? (
            <div className="space-y-4">
              {userData.recentPosts.map((post) => (
                <Card
                  key={post.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg hover:text-green-600 transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-gray-600">
                      {post.preview}
                    </CardDescription>
                    <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{post.replies} replies</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No posts yet
              </h3>
              <p className="text-gray-500 mb-4">
                You haven't created any forum posts yet
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                Start a Discussion
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved">
          <h2 className="text-2xl font-bold mb-6">Saved Tips</h2>
          {userData.savedTips.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {userData.savedTips.map((tip) => (
                <TipCard key={tip.id} {...tip} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No saved tips
              </h3>
              <p className="text-gray-500 mb-4">
                You haven't saved any gardening tips yet
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                Browse Tips
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
