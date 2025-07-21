interface FooterProps {
  translations: {
    footer: {
      copyright: string;
    };
  };
}

export const Footer = ({ translations }: FooterProps) => {
  return (
    <footer className="relative z-10 py-8 border-t border-border/20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            {translations.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};