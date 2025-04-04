import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `User Profile - ${params.id}`,
  };
};

export default function UserProfile({ params }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1>Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile page
        <span className="p-2 rounded bg-green-500 text-black">{params.id}</span>
      </p>
    </div>
  );
}
