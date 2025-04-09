import React from "react";
import { Link } from "react-router-dom";
import { MessageSquare, Users, Clock } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ForumThreadProps {
  id: string;
  title: string;
  category: string;
  replies: number;
  participants: number;
  lastActivity: string;
  preview: string;
  isSticky?: boolean;
  onClick?: () => void;
}

const ForumThread = ({
  id,
  title,
  category,
  replies,
  participants,
  lastActivity,
  preview,
  isSticky = false,
  onClick,
}: ForumThreadProps) => {
  return (
    <Card
      className={`mb-4 hover:shadow-md transition-shadow ${isSticky ? "border-l-4 border-l-green-500" : ""}`}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-bold hover:text-green-600 transition-colors cursor-pointer">
              {isSticky && (
                <Badge
                  variant="outline"
                  className="mr-2 bg-green-50 text-green-700 border-green-200"
                >
                  Sticky
                </Badge>
              )}
              <Link to={`/forum/thread/${id}`}>{title}</Link>
            </CardTitle>
            <Badge
              variant="secondary"
              className="mt-1 bg-green-100 text-green-800"
            >
              {category}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {preview}
        </CardDescription>
        <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span>{replies} respuestas</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{participants} participantes</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{lastActivity}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ForumThread;
