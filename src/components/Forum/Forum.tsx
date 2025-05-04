import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { getAllQuestions, postQuestion,  postComment,  createUser } from "../../services/api";
import UserDetailsModal from "./UserDetailsModal";

const Forum = () => {
    const overviewRef = useRef<HTMLDivElement>(null);
    const productRef = useRef<HTMLDivElement>(null);
    const solutionRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const parentcompanyRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);


    const location = useLocation();
    const [questions, setQuestions] = useState<any[]>([]); // Assuming "questions" from API

    const [commentInputs, setCommentInputs] = useState<{ [key: string]: string }>({});

    const [isModalOpen, setIsModalOpen] = useState(false); // To toggle modal visibility
    const [commentText, setCommentText] = useState("");
    const [currentQuestionId, setCurrentQuestionId] = useState<string | null>(null);
    const [currentAnswerId, setCurrentAnswerId] = useState<string | null>(null);
    const [newQuestion, setNewQuestion] = useState({ title: "", description: "" });

    const [visibleComments, setVisibleComments] = useState<{ [answerId: string]: boolean }>({}); // Manage visibility of comments

    useEffect(() => {
        if (location.state?.scrollTo) {
            const sectionRef =
                location.state.scrollTo === "overview"
                    ? overviewRef
                    : location.state.scrollTo === "product"
                        ? productRef
                        : location.state.scrollTo === "solution"
                            ? solutionRef
                            : location.state.scrollTo === "parentcompany"
                                ? parentcompanyRef
                                : contactRef;

            setTimeout(() => {
                sectionRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const data = await getAllQuestions();
                setQuestions(data);
            } catch (error) {
                console.error("Failed to fetch questions", error);
            }
        };

        fetchQuestions();
    }, []);

    const handleCommentChange = (key: string, value: string) => {
        setCommentInputs((prev) => ({ ...prev, [key]: value }));
    };

    const handlePostComment = async (questionId: string, answerId: string) => {
        const userId = sessionStorage.getItem("userId");
        const comment = commentInputs[answerId];
    
        if (!comment) return;
    
        if (!userId) {
            setCurrentQuestionId(questionId);
            setCurrentAnswerId(answerId);
            setCommentText(comment);
            setIsModalOpen(true);
            return;
        }
    
        try {
            setLoading(true);
            await postComment(questionId, answerId, comment, userId);
            setCommentInputs((prev) => ({ ...prev, [answerId]: "" }));
            const updated = await getAllQuestions();
            setQuestions(updated);
        } catch (err) {
            console.error("Failed to post comment", err);
        } finally {
            setLoading(false);
        }
    };
    

    const handleModalSubmit = async (name: string, email: string, designation: string) => {
        try {
            setLoading(true);
            const newUser = await createUser(name, email, designation);
            sessionStorage.setItem("userId", newUser._id);
    
            if (currentQuestionId && currentAnswerId && commentText) {
                await postComment(currentQuestionId, currentAnswerId, commentText, newUser._id);
                setCommentInputs((prev) => ({ ...prev, [currentAnswerId]: "" }));
                const updated = await getAllQuestions();
                setQuestions(updated);
            }
    
            setIsModalOpen(false);
        } catch (error) {
            console.error("User creation or comment posting failed", error);
        } finally {
            setLoading(false);
        }
    };
    

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handlePostQuestion = async () => {
        const userId = sessionStorage.getItem("userId");
    
        if (!userId) {
            setIsModalOpen(true);
            return;
        }
    
        if (!newQuestion.title || !newQuestion.description) return;
    
        try {
            setLoading(true);
            await postQuestion(newQuestion.title, newQuestion.description, userId);
            setNewQuestion({ title: "", description: "" });
            const updated = await getAllQuestions();
            setQuestions(updated);
        } catch (error) {
            console.error("Failed to post question", error);
        } finally {
            setLoading(false);
        }
    };
    

    const toggleCommentsVisibility = (answerId: string) => {
        setVisibleComments(prev => ({
            ...prev,
            [answerId]: !prev[answerId],
        }));
    };

    return (
        <>
            <Navbar
                overviewRef={overviewRef as React.RefObject<HTMLDivElement>}
                productRef={productRef as React.RefObject<HTMLDivElement>}
                solutionRef={solutionRef as React.RefObject<HTMLDivElement>}
                contactRef={contactRef as React.RefObject<HTMLDivElement>}
            />

{loading && (
  <div className="fixed inset-0 z-60 flex flex-col justify-center items-center bg-transparent backdrop-blur-sm">
    <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="mt-4 text-lg font-semibold text-black">ABCDE</p>
  </div>
)}




            {/* Forum Content */}
            <div className="container mx-auto px-4 py-10 my-20">
                <div className="space-y-8">
                    <div className="bg-white p-6 rounded-lg shadow mb-8">
                        <h3 className="text-2xl font-semibold mb-4">Ask a Question</h3>
                        <input
                            type="text"
                            className="w-full border p-2 mb-2 rounded"
                            placeholder="Enter question title"
                            value={newQuestion.title}
                            onChange={(e) => setNewQuestion((prev) => ({ ...prev, title: e.target.value }))}
                        />
                        <textarea
                            className="w-full border p-2 mb-2 rounded"
                            placeholder="Describe your question..."
                            rows={4}
                            value={newQuestion.description}
                            onChange={(e) => setNewQuestion((prev) => ({ ...prev, description: e.target.value }))}
                        ></textarea>
                        <button
                            onClick={handlePostQuestion}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Post Question
                        </button>
                    </div>

                    {questions.map((question) => (
                        <div
                            key={question._id}
                            className="bg-white shadow rounded-xl p-6 mb-8 border border-gray-100 flex flex-col sm:flex-row"
                        >
                            {/* Left: User Avatar and Info */}
                            <div className="sm:w-1/8 flex flex-col items-center sm:items-start mb-4 sm:mb-0">
                                <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-xl font-bold">
                                    {question.user?.name?.[0]?.toUpperCase() || "U"}
                                </div>
                                <div className="mt-2 text-center sm:text-left">
  <div className="font-semibold text-gray-800">{question.user?.name}</div>
  <div className="text-xs text-gray-500">{question.user?.designation}</div>
  <div className="text-xs text-gray-500">{new Date(question.date).toLocaleString()}</div>
</div>

                            </div>

                            {/* Right: Question and Answers */}
                            <div className="sm:w-3/4 sm:pl-6">
                                <h3 className="text-xl font-semibold text-gray-900">{question.title}</h3>
                                <p className="text-gray-700 mt-1">{question.description}</p>

                                {/* Answers */}
                                <div className="mt-4 space-y-6">
                                    {question.answers?.map((answer: any, index: number) => (
                                        <div
                                        key={index}
                                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 space-y-3"
                                      >
                                        {/* Answer Content */}
                                        <p className="text-gray-900 text-base leading-relaxed">
                                          {answer.answer}
                                        </p>
                                      
                                        {/* Footer with User Info and Date */}
                                        <div className="flex items-center justify-between text-sm text-gray-500">
  <div>
    Answered by{" "}
    <span className="font-semibold text-gray-700">
      {answer.user?.name}
    </span>
    {answer.user?.designation && (
      <span className="ml-1 text-gray-500">
        ({answer.user.designation})
      </span>
    )}
  </div>
  <div>{new Date(answer.date).toLocaleString()}</div>
</div>

                                      
                                      

                                            {/* Comment Count and Toggle */}
                                            <div
                                                className="text-sm text-blue-600 mt-2 cursor-pointer hover:underline"
                                                onClick={() => toggleCommentsVisibility(answer._id)}
                                            >
                                                {answer.comments?.length || 0} Comment{answer.comments?.length !== 1 ? "s" : ""}
                                            </div>

                                            {/* Comments Section (Hidden by default) */}
                                            {visibleComments[answer._id] && (
                                                <div className="mt-3 pl-4 border-l-2 border-blue-200 space-y-2">
                                                    {/* Add Comment Input */}
                                                    <div className="flex mt-2  pb-2">
                                                        <input
                                                            type="text"
                                                            className="flex-grow px-3 py-2 text-sm border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                            placeholder="Write a comment..."
                                                            value={commentInputs[answer._id] || ""}
                                                            onChange={(e) =>
                                                                handleCommentChange(answer._id, e.target.value)
                                                            }
                                                        />
                                                        <button
                                                            onClick={() => handlePostComment(question._id, answer._id)}
                                                            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-r-md"
                                                        >
                                                            Post
                                                        </button>

                                                       
                                                        
                                                    </div>
                                                    {answer.comments?.map((comment: any, idx: number) => (
                                                        <div
                                                            key={idx}
                                                            className="bg-gradient-to-r  to-white rounded-lg shadow-lg p-4 mb-4 flex items-start space-x-4"
                                                        >
                                                            <div className="flex-shrink-0">
                                                                {/* Commenter Avatar */}
                                                                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-semibold">
                                                                    {comment.user?.name?.[0]?.toUpperCase() || "U"}
                                                                </div>
                                                            </div>

                                                            <div className="flex-grow">
                                                                {/* Comment Header */}
                                                                <div className="flex justify-between items-center mb-2">
  <div className="text-sm font-semibold text-gray-800">
    {comment.user?.name}
    {comment.user?.designation && (
      <span className="ml-1 text-gray-500 text-xs">
        ({comment.user.designation})
      </span>
    )}
  </div>
  <div className="text-xs text-gray-500">
    {new Date(comment.date).toLocaleString()}
  </div>
</div>


                                                                {/* Comment Text */}
                                                                <p className="text-gray-700">{comment.text}</p>
                                                            </div>
                                                        </div>
                                                    ))}



                                                    
                                                </div>
                                                
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && (
        <UserDetailsModal onSubmit={handleModalSubmit} onClose={handleModalClose} /> )}
            <Footer parentcompanyRef={parentcompanyRef as React.RefObject<HTMLDivElement>} />
        </>
    );
};

export default Forum;
