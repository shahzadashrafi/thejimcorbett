export interface ApiResponse{
    success : boolean;
    message : string;
    isAcceptingMessage ?: boolean;
    messages?:any
}