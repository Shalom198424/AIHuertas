import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowLeft,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Share2,
  Bookmark,
} from "lucide-react";
import { forumData } from "../../data/forumData";

interface Comment {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  timestamp: string;
  upvotes: number;
  downvotes: number;
  userVote?: "up" | "down" | null;
}

const ThreadDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [replyContent, setReplyContent] = useState("");
  const [comments, setComments] = useState<Comment[]>([
    {
      id: "1",
      author: {
        id: "user1",
        name: "AmoCultivar",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GardenExpert",
      },
      content:
        "Coffee grounds are excellent for improving soil quality! They add organic matter and slightly acidic properties that many plants love. I mix them with my compost pile.",
      timestamp: "1 day ago",
      upvotes: 12,
      downvotes: 1,
      userVote: null,
    },
    {
      id: "2",
      author: {
        id: "user2",
        name: "PlantLover22",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PlantLover22",
      },
      content:
        "I've had great success with eggshells for my tomato plants. Crush them finely and mix into the soil before planting. They provide calcium that helps prevent blossom end rot.",
      timestamp: "23 hours ago",
      upvotes: 8,
      downvotes: 0,
      userVote: null,
    },
    {
      id: "3",
      author: {
        id: "user3",
        name: "GreenThumb",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GreenThumb",
      },
      content:
        "Be careful not to add too many coffee grounds at once, as they can compact and create a barrier. Mix them well with other compost materials for best results.",
      timestamp: "10 hours ago",
      upvotes: 5,
      downvotes: 0,
      userVote: null,
    },
  ]);

  // Find the thread based on the ID
  const thread = forumData.find((t) => t.id === id);

  if (!thread) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Thread not found
        </h2>
        <p className="text-gray-600 mb-6">
          The thread you're looking for doesn't exist or has been removed.
        </p>
        <Button
          onClick={() => navigate("/forum")}
          className="bg-green-600 hover:bg-green-700"
        >
          Volver al Foro
        </Button>
      </div>
    );
  }

  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!replyContent.trim()) return;

    const newComment: Comment = {
      id: `comment-${Date.now()}`,
      author: {
        id: "currentUser",
        name: "You",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=You",
      },
      content: replyContent,
      timestamp: "Just now",
      upvotes: 0,
      downvotes: 0,
      userVote: null,
    };

    setComments([...comments, newComment]);
    setReplyContent("");
  };

  const handleVote = (commentId: string, voteType: "up" | "down") => {
    setComments(
      comments.map((comment) => {
        if (comment.id === commentId) {
          // If already voted the same way, remove the vote
          if (comment.userVote === voteType) {
            return {
              ...comment,
              upvotes:
                voteType === "up" ? comment.upvotes - 1 : comment.upvotes,
              downvotes:
                voteType === "down" ? comment.downvotes - 1 : comment.downvotes,
              userVote: null,
            };
          }
          // If already voted the other way, switch the vote
          else if (comment.userVote) {
            return {
              ...comment,
              upvotes:
                voteType === "up"
                  ? comment.upvotes + 1
                  : comment.upvotes - (comment.userVote === "up" ? 1 : 0),
              downvotes:
                voteType === "down"
                  ? comment.downvotes + 1
                  : comment.downvotes - (comment.userVote === "down" ? 1 : 0),
              userVote: voteType,
            };
          }
          // If not voted yet, add the vote
          else {
            return {
              ...comment,
              upvotes:
                voteType === "up" ? comment.upvotes + 1 : comment.upvotes,
              downvotes:
                voteType === "down" ? comment.downvotes + 1 : comment.downvotes,
              userVote: voteType,
            };
          }
        }
        return comment;
      }),
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6 flex items-center"
          onClick={() => navigate("/forum")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Foro
        </Button>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold">
                  {thread.isSticky && (
                    <Badge
                      variant="outline"
                      className="mr-2 bg-green-50 text-green-700 border-green-200"
                    >
                      Sticky
                    </Badge>
                  )}
                  {thread.title}
                </CardTitle>
                <div className="flex items-center mt-2 space-x-2">
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800"
                  >
                    {thread.category}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    Comenzo {thread.lastActivity}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Flag className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-4 mb-6">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=ThreadStarter"
                  alt="Thread Starter"
                />
                <AvatarFallback>TS</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">ThreadStarter</div>
                <div className="text-sm text-gray-500">Post Original</div>
              </div>
            </div>
            <div className="prose max-w-none">
              <p>{thread.preview}</p>
              <p>
              He estado leyendo sobre enmiendas naturales del suelo y quiero mejorar el 
              suelo de mi jardín sin usar fertilizantes químicos. ¿Alguien ha tenido éxito 
              con los posos de café o las cáscaras de huevo? ¿Qué cantidades utilizas y 
              cómo las aplicas?
              </p>
              <p>
              Mi suelo es actualmente bastante arcilloso y no drena bien. Espero cultivar 
              verduras la próxima temporada, pero primero quiero preparar la tierra 
              adecuadamente.
              </p>
            </div>
          </CardContent>
          <CardFooter className="border-t pt-4 flex justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="flex items-center">
                <ThumbsUp className="mr-1 h-4 w-4" />
                <span>Útiles (15)</span>
              </Button>
              <div className="flex items-center text-sm text-gray-500">
                <MessageSquare className="mr-1 h-4 w-4" />
                <span>{thread.replies} respuestas</span>
              </div>
            </div>
            <div className="text-sm text-gray-500">{thread.lastActivity}</div>
          </CardFooter>
        </Card>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Respuestas</h3>
          {comments.map((comment) => (
            <Card key={comment.id} className="mb-4">
              <CardHeader className="pb-2">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={comment.author.avatar}
                      alt={comment.author.name}
                    />
                    <AvatarFallback>
                      {comment.author.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div className="font-medium">{comment.author.name}</div>
                      <div className="text-sm text-gray-500">
                        {comment.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{comment.content}</p>
              </CardContent>
              <CardFooter className="pt-0 flex justify-between">
                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`text-xs ${comment.userVote === "up" ? "text-green-600" : ""}`}
                    onClick={() => handleVote(comment.id, "up")}
                  >
                    <ThumbsUp className="mr-1 h-3 w-3" />
                    <span>{comment.upvotes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`text-xs ${comment.userVote === "down" ? "text-red-600" : ""}`}
                    onClick={() => handleVote(comment.id, "down")}
                  >
                    <ThumbsDown className="mr-1 h-3 w-3" />
                    <span>{comment.downvotes}</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm" className="text-xs">
                  Respuesta
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Añade tu respuesta</CardTitle>
            <CardDescription>
              Comparta sus conocimientos o haga una pregunta de seguimiento
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitReply}>
              <Textarea
                placeholder="Escribe tu respuesta aquí..."
                className="mb-4"
                rows={4}
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                required
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700"
                  disabled={!replyContent.trim()}
                >
                  Publicar respuesta
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Directrices del foro</h3>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>Sé respetuoso y considerado con los demás miembros</li>
            <li>Mantente en el tema y las respuestas relevantes para la discusión</li>
            <li>Comparte tus experiencias y conocimientos personales</li>
            <li>Evite publicar contenido promocional o spam</li>
            <li>
              Si necesita asistencia inmediata, considere iniciar un nuevo hilo
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThreadDetail;
