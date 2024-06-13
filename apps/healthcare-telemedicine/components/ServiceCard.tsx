import {
  BookmarkSquareIcon,
  ClockIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/solid';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@diar/donda';
import { useBooking } from '@diar/hooks';

export const ServiceCard = ({
  description,
  name,
  booked = false,
}: {
  description: string;
  name: string;
  booked?: boolean;
}) => {
  const { selectService } = useBooking();

  const handleSelectService = (service: string) => {
    selectService(service);
  };

  const truncateDescription = (text: string) => {
    if (text.length > 160) {
      return text.substring(0, 160) + '...';
    }
    return text;
  };
  return (
    <div className="bg-white shadow-top-bottom rounded-lg p-4 max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button
          className="bg-primary text-white px-4 py-2 rounded shadow"
          onClick={() => handleSelectService(name)}
        >
          Select Service
        </button>
        {/* <span className="text-gray-800 cursor-pointer">...</span> */}
      </div>
      <h2>{name}</h2>
      <p className="text-sm text-gray-800">
        {truncateDescription(description)}
      </p>
      {booked ? (
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center space-x-2">
            <ClockIcon className="h-5 w-5 text-gray-800" />
            <span className="text-xs text-gray-600">Feb 24</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <BookmarkSquareIcon className="h-5 w-5 text-gray-800" />
              <span className="text-sm text-gray-800">18</span>
            </div>
            <div className="flex items-center space-x-1">
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 text-gray-800" />
              <span className="text-sm text-gray-800">7</span>
            </div>
            <div className="flex -space-x-2">
              <Avatar>
                <AvatarImage src="/batman.webp" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      ) : (
        <Dialog>
          <DialogTrigger className="mt-4 underline decoration-solid">
            See More
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="mb-8">{name}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};
