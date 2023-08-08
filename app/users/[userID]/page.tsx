import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import { Suspense } from 'react';
import UserPosts from './components/userPosts';
import type { Metadata } from 'next';

type Params = {
  params: {
    userID: string;
  };
};

export async function generateMetadata({
  params: { userID },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userID);
  const user: User = await userData;

  return {
    title: user.name,
    description: `This is the page of ${user.name}`,
  };
}

export default async function UserPage({ params: { userID } }: Params) {
  const userData: Promise<User> = getUser(userID);
  const userPostsData: Promise<Post[]> = getUserPosts(userID);

  const user = await userData;
  //when second promise is on way , i can let it be in suspense and have the first earlier

  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
