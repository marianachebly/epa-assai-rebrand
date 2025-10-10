import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Lock, Save, LogOut, Eye, EyeOff } from "lucide-react";

const ADMIN_PASSWORD = "EPA2025Admin";
const STORAGE_KEY = "listra_admin_content";
const AUTH_KEY = "listra_admin_auth";

const ListraAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [faqText, setFaqText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Verifica se já está autenticado
    const auth = sessionStorage.getItem(AUTH_KEY);
    if (auth === "true") {
      setIsAuthenticated(true);
      loadContent();
    }
  }, []);

  const loadContent = () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setVideoUrl(data.videoUrl || "");
        
        // Converte FAQs para formato de texto
        if (data.faqs && Array.isArray(data.faqs)) {
          const text = data.faqs
            .map((faq: any) => `${faq.question}\t${faq.answer}`)
            .join("\n");
          setFaqText(text);
        }
      } catch (e) {
        console.error("Erro ao carregar conteúdo:", e);
      }
    } else {
      // Carrega valores padrão do JSON estático
      import("@/config/content.json").then((module) => {
        setVideoUrl(module.default.videoUrl);
        const text = module.default.faqs
          .map((faq: any) => `${faq.question}\t${faq.answer}`)
          .join("\n");
        setFaqText(text);
      });
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(AUTH_KEY, "true");
      loadContent();
      toast.success("Login realizado com sucesso!");
    } else {
      toast.error("Senha incorreta!");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(AUTH_KEY);
    setPassword("");
    navigate("/");
  };

  const handleSave = () => {
    try {
      // Processa o texto das FAQs (formato: Pergunta TAB Resposta)
      const lines = faqText.trim().split("\n");
      const faqs = lines
        .filter(line => line.trim())
        .map(line => {
          const parts = line.split("\t");
          if (parts.length >= 2) {
            return {
              question: parts[0].trim(),
              answer: parts[1].trim()
            };
          }
          return null;
        })
        .filter(Boolean);

      const content = {
        videoUrl: videoUrl.trim(),
        faqs
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
      
      // Dispara evento customizado para atualizar outros componentes
      window.dispatchEvent(new Event("content-updated"));
      
      toast.success("Conteúdo salvo com sucesso!");
    } catch (e) {
      console.error("Erro ao salvar:", e);
      toast.error("Erro ao salvar o conteúdo");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl">Área Administrativa</CardTitle>
            <CardDescription>Digite a senha para acessar</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite a senha"
                    className="pr-10"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black text-primary">Painel Administrativo</h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        </div>

        {/* Vídeo */}
        <Card>
          <CardHeader>
            <CardTitle>URL do Vídeo do YouTube</CardTitle>
            <CardDescription>
              Cole a URL completa do vídeo (ex: https://www.youtube.com/embed/VIDEO_ID)
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/embed/..."
            />
            {videoUrl && (
              <div className="aspect-video rounded-lg overflow-hidden bg-black">
                <iframe
                  src={videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title="Preview"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* FAQs */}
        <Card>
          <CardHeader>
            <CardTitle>Perguntas Frequentes</CardTitle>
            <CardDescription>
              Cole do Excel: uma linha por pergunta, separando Pergunta e Resposta com TAB.
              <br />
              Formato: <code className="bg-muted px-1 py-0.5 rounded">Pergunta [TAB] Resposta</code>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={faqText}
              onChange={(e) => setFaqText(e.target.value)}
              placeholder="Como participar?	Digite seu CPF e faça suas compras...&#10;Qual o período?	De 13/10 a 15/11..."
              className="min-h-[300px] font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground mt-2">
              💡 Dica: Copie as células do Excel (Pergunta | Resposta) e cole aqui diretamente
            </p>
          </CardContent>
        </Card>

        {/* Botão Salvar */}
        <Button onClick={handleSave} size="lg" className="w-full">
          <Save className="w-5 h-5 mr-2" />
          Salvar Alterações
        </Button>
      </div>
    </div>
  );
};

export default ListraAdmin;
