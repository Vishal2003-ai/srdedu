export default function Footer() {
  return (
    <footer className="w-full border-t bg-background mt-10">
      <div className="container mx-auto text-center py-6 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} SRD Education Center. All rights reserved.</p>
        <p className="mt-2">Empowering students with digital skills.</p>
      </div>
    </footer>
  );
}
