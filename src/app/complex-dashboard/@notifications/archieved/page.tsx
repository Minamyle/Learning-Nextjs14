import Card from "@/components/card";
import Link from "next/link";

export default function ArchievedNotification() {
  return (
    <>
      <Card>
        <div>Archied notifications</div>
        <Link href="/complex-dashboard">Default</Link>
      </Card>
    </>
  );
}
