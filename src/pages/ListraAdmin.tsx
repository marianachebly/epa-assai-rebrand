import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Lock, Save, LogOut, Eye, EyeOff, Plus, Trash2 } from "lucide-react";

const ADMIN_PASSWORD = "EPA2025Admin";
const STORAGE_KEY = "listra_admin_content";
const AUTH_KEY = "listra_admin_auth";

interface FAQ {
  question: string;
  answer: string;
}

const ListraAdmin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [faqs, setFaqs] = useState<FAQ[]>([]);
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
    
    // Primeiro carrega o conteúdo padrão do JSON
    import("@/config/content.json").then((module) => {
      const defaultData = module.default;
      
      if (stored) {
        try {
          // Sempre usa o conteúdo editado do localStorage (prioridade para edições do ADMIN)
          const storedData = JSON.parse(stored);
          setVideoUrl(storedData.videoUrl || "");
          setFaqs(storedData.faqs || []);
        } catch (e) {
          console.error("Erro ao carregar conteúdo:", e);
          setVideoUrl(defaultData.videoUrl);
          setFaqs(defaultData.faqs || []);
        }
      } else {
        setVideoUrl(defaultData.videoUrl);
        setFaqs(defaultData.faqs || []);
      }
    });
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

  const handleAddFaq = () => {
    setFaqs([...faqs, { question: "", answer: "" }]);
  };

  const handleRemoveFaq = (index: number) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const handleFaqChange = (index: number, field: 'question' | 'answer', value: string) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const convertToEmbedUrl = (url: string): string => {
    // Remove espaços
    url = url.trim();
    
    // Se já está no formato embed, retorna
    if (url.includes('/embed/')) {
      return url;
    }
    
    // Converte URL normal do YouTube para embed
    // Formatos suportados:
    // https://www.youtube.com/watch?v=VIDEO_ID
    // https://youtu.be/VIDEO_ID
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
      /youtube\.com\/embed\/([^&\s]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }
    
    return url;
  };

  const handleVideoUrlChange = (value: string) => {
    const embedUrl = convertToEmbedUrl(value);
    setVideoUrl(embedUrl);
  };

  const handleSave = () => {
    try {
      // Valida se há FAQs com pergunta e resposta preenchidas
      const validFaqs = faqs.filter(faq => faq.question.trim() && faq.answer.trim());

      if (validFaqs.length === 0) {
        toast.error("Adicione pelo menos uma pergunta e resposta");
        return;
      }

      const content = {
        videoUrl: videoUrl.trim(),
        faqs: validFaqs
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
      
      // Dispara evento customizado para atualizar outros componentes
      window.dispatchEvent(new Event("content-updated"));
      
      toast.success("Conteúdo salvo com sucesso! As alterações já estão visíveis no site.");
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
              Cole qualquer URL do YouTube (ex: https://www.youtube.com/watch?v=VIDEO_ID)
              <br />
              <span className="text-xs text-muted-foreground">O sistema converte automaticamente para o formato correto</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              value={videoUrl}
              onChange={(e) => handleVideoUrlChange(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
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
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">Perguntas Frequentes</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Adicione ou edite as perguntas e respostas
              </p>
            </div>
            <Button onClick={handleAddFaq} variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Adicionar FAQ
            </Button>
          </div>

          {faqs.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">
                  Nenhuma FAQ cadastrada. Clique em "Adicionar FAQ" para começar.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">FAQ #{index + 1}</CardTitle>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveFaq(index)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor={`question-${index}`}>Pergunta</Label>
                      <Input
                        id={`question-${index}`}
                        value={faq.question}
                        onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                        placeholder="Digite a pergunta..."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`answer-${index}`}>Resposta</Label>
                      <Textarea
                        id={`answer-${index}`}
                        value={faq.answer}
                        onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                        placeholder="Digite a resposta..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

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
