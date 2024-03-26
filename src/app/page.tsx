import { redirect } from 'next/navigation';

export default function HomePage() {
  const url = '/dashboard/main';
  redirect(url);
}
