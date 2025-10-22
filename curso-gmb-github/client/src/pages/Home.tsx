import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, TrendingUp, Clock, Award, ChevronRight, Play } from "lucide-react";

export default function Home() {
  const scrollToPlans = () => {
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  const trackEvent = (eventName: string) => {
    // Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', eventName);
    }
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-hero">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/vibrantpeak-logo.webp" alt="Vibrant Peak" className="h-10 w-10 rounded-full" />
            <span className="font-bold text-lg">Vibrant Peak</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#sobre" className="text-sm font-medium hover:text-primary transition-colors">Sobre o Curso</a>
            <a href="#modulos" className="text-sm font-medium hover:text-primary transition-colors">Módulos</a>
            <a href="#planos" className="text-sm font-medium hover:text-primary transition-colors">Planos</a>
            <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">FAQ</a>
          </nav>
          <Button 
            onClick={() => { scrollToPlans(); trackEvent('ViewContent'); }} 
            className="bg-primary hover:bg-primary/90"
            data-gtm-event="click_cta_header"
          >
            Começar Agora
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-hero">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-accent text-accent-foreground hover:bg-accent/90">
                🚀 Curso Completo e Prático
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Domine o <span className="text-primary">Google Meu Negócio</span> e Atraia Mais Clientes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Aprenda a otimizar seu perfil no Google, aparecer nas primeiras posições e transformar buscas em vendas. Do básico ao avançado, com estratégias comprovadas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => { scrollToPlans(); trackEvent('ViewContent'); }} 
                  className="bg-primary hover:bg-primary/90 text-lg"
                  data-gtm-event="click_cta_hero"
                >
                  Ver Planos <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg">
                  <Play className="mr-2 h-5 w-5" /> Assistir Preview
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span className="text-sm font-medium ml-1">5.0</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">+500 alunos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
                <img 
                  src="/gmb-interface.png" 
                  alt="Interface do Google Meu Negócio" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-8 w-8" />
                  <div>
                    <div className="text-2xl font-bold">+300%</div>
                    <div className="text-sm">Mais Visibilidade</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problema e Solução */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seu Negócio Está Invisível no Google?
            </h2>
            <p className="text-lg text-muted-foreground">
              Milhares de clientes estão procurando exatamente o que você oferece no Google Maps e na Busca, mas eles encontram seus concorrentes primeiro.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-destructive/50">
              <CardHeader>
                <CardTitle className="text-destructive">❌ Sem Otimização</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Perfil incompleto ou desatualizado</li>
                  <li>• Poucas ou nenhuma avaliação</li>
                  <li>• Não aparece nas buscas locais</li>
                  <li>• Concorrentes dominam o Local Pack</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/50 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-accent text-accent-foreground">Transformação</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-primary">✨ Com Este Curso</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5" />
                    <span>Perfil 100% otimizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5" />
                    <span>Estratégias para avaliações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5" />
                    <span>Ranking no Local Pack</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-4 w-4 text-secondary mt-0.5" />
                    <span>Mais clientes qualificados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-secondary/50">
              <CardHeader>
                <CardTitle className="text-secondary">✅ Resultados</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• +300% de visualizações no perfil</li>
                  <li>• Mais ligações e mensagens</li>
                  <li>• Aumento em visitas à loja</li>
                  <li>• Vendas consistentes do Google</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Um Curso <span className="text-primary">Completo</span>, do Básico ao Avançado
            </h2>
            <p className="text-lg text-muted-foreground">
              Criado especialmente para empresários e profissionais que querem dominar o Google Meu Negócio e gerar resultados reais.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle>4+ Horas</CardTitle>
                <CardDescription>De conteúdo em vídeo</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-10 w-10 text-secondary mb-2" />
                <CardTitle>22 Aulas</CardTitle>
                <CardDescription>Organizadas em 4 módulos</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-accent mb-2" />
                <CardTitle>Suporte</CardTitle>
                <CardDescription>Grupo exclusivo de alunos</CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-destructive mb-2" />
                <CardTitle>Certificado</CardTitle>
                <CardDescription>Ao concluir o curso</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Módulos do Curso */}
      <section id="modulos" className="py-20 bg-blue-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O Que Você Vai <span className="text-primary">Aprender</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              4 módulos progressivos que vão te levar do zero ao domínio completo do Google Meu Negócio.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-l-4 border-l-primary shadow-google hover-lift">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Badge className="bg-primary text-primary-foreground">Módulo 1</Badge>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">A Fundação Perfeita</CardTitle>
                    <CardDescription className="text-base">
                      Configure seu perfil corretamente desde o início
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Como criar ou reivindicar seu perfil no Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Processo completo de verificação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Consistência NAP (Nome, Endereço, Telefone)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary shadow-google hover-lift">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Badge className="bg-secondary text-secondary-foreground">Módulo 2</Badge>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Otimização Essencial</CardTitle>
                    <CardDescription className="text-base">
                      Otimize cada elemento do seu perfil para máxima visibilidade
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary mt-0.5" />
                    <span>Escolha estratégica de categorias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary mt-0.5" />
                    <span>Fotos de alta qualidade que convertem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary mt-0.5" />
                    <span>Horário de funcionamento e atributos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary mt-0.5" />
                    <span>Descrição otimizada com palavras-chave</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent shadow-google hover-lift">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Badge className="bg-accent text-accent-foreground">Módulo 3</Badge>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Engajamento e Relacionamento</CardTitle>
                    <CardDescription className="text-base">
                      Construa autoridade e confiança com seus clientes
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span>O poder das avaliações para seu negócio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span>Como pedir e responder avaliações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span>Estratégia de posts no Google</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-accent mt-0.5" />
                    <span>Perguntas e Respostas + Sistema de mensagens</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-destructive shadow-google hover-lift">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Badge className="bg-destructive text-destructive-foreground">Módulo 4</Badge>
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">Estratégias Avançadas</CardTitle>
                    <CardDescription className="text-base">
                      Técnicas profissionais para dominar seu mercado local
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-destructive mt-0.5" />
                    <span>SEO Off-Page e construção de citações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-destructive mt-0.5" />
                    <span>Análise competitiva e espionagem estratégica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-destructive mt-0.5" />
                    <span>Construção de entidade e autoridade</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-destructive mt-0.5" />
                    <span>Google Insights: métricas e otimização contínua</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

          {/* Planos */}
      <section id="planos" className="py-20 bg-orange-light">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Escolha Seu <span className="text-primary">Plano</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Invista no crescimento do seu negócio com o plano ideal para você.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Plano Básico */}
            <Card className="shadow-google hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <CardDescription>Para quem quer começar</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">R$ 97</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Apresentação em Slides (PDF)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>E-book Completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Audiobook do Curso</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Acesso vitalício</span>
                  </li>
                </ul>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => trackEvent('AddToCart')}
                  data-gtm-event="click_plan_basic"
                >
                  Começar Agora
                </Button>
              </CardContent>
            </Card>

            {/* Plano Completo - DESTAQUE */}
            <Card className="border-primary border-4 relative shadow-google-lg hover-lift bg-gradient-to-br from-blue-50 to-white">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground text-sm px-4 py-1">
                  ⭐ MAIS POPULAR
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Completo</CardTitle>
                <CardDescription>Melhor custo-benefício</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-primary">R$ 297</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="font-medium">Tudo do Plano Básico +</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Vídeo-aulas Completas (4h+)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Templates e Checklists</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Grupo Exclusivo de Alunos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Certificado de Conclusão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Atualizações gratuitas</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-lg py-6"
                  onClick={() => trackEvent('AddToCart')}
                  data-gtm-event="click_plan_complete"
                >
                  Garantir Minha Vaga
                </Button>
              </CardContent>
            </Card>

            {/* Plano VIP */}
            <Card className="shadow-google hover-lift border-secondary border-2">
              <CardHeader>
                <CardTitle className="text-2xl">VIP</CardTitle>
                <CardDescription>Acompanhamento personalizado</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">R$ 997</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span className="font-medium">Tudo do Plano Completo +</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>3 Mentorias Individuais (1h cada)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Análise do seu perfil GMB</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Plano de ação personalizado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-0.5" />
                    <span>Suporte prioritário via WhatsApp</span>
                  </li>
                </ul>
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/90"
                  onClick={() => trackEvent('AddToCart')}
                  data-gtm-event="click_plan_vip"
                >
                  Quero Mentoria VIP
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              🔒 Pagamento 100% seguro • 💯 Garantia de 7 dias • ✅ Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section className="py-20 bg-green-light">
        <div className="container">
          <Card className="max-w-4xl mx-auto border-secondary border-4 shadow-google-lg">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/20 mb-4">
                    <Award className="h-10 w-10 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Garantia de 7 Dias</h3>
                  <p className="text-muted-foreground">
                    Experimente o curso sem riscos. Se você não ficar satisfeito com o conteúdo nos primeiros 7 dias, devolvemos 100% do seu investimento. Sem perguntas, sem complicações.
                  </p>
                </div>
                <div className="bg-gradient-green rounded-xl p-8 text-center shadow-lg">
                  <div className="text-6xl font-bold text-white mb-2">100%</div>
                  <div className="text-xl font-semibold text-white mb-2">Satisfação Garantida</div>
                  <p className="text-sm text-white/90">
                    Ou seu dinheiro de volta
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Perguntas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o curso
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Para quem é este curso?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Este curso é ideal para empresários, profissionais autônomos, gestores de marketing e qualquer pessoa que queira aumentar a visibilidade do seu negócio local no Google. Não é necessário conhecimento técnico prévio.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quanto tempo tenho para concluir o curso?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Você tem acesso vitalício ao curso! Pode assistir no seu ritmo, quantas vezes quiser. O conteúdo completo tem cerca de 4 horas, mas você pode distribuir ao longo de semanas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Funciona para qualquer tipo de negócio?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sim! As estratégias funcionam para qualquer negócio local: restaurantes, consultórios, lojas, escritórios, prestadores de serviços, etc. Se você tem um endereço físico ou atende uma região específica, este curso é para você.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preciso pagar mensalidade?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Não! É um pagamento único. Você paga uma vez e tem acesso para sempre, incluindo todas as atualizações futuras do conteúdo.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Como funciona a garantia?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Você tem 7 dias para experimentar o curso. Se não gostar do conteúdo por qualquer motivo, basta enviar um e-mail e devolvemos 100% do seu investimento, sem perguntas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vou receber certificado?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sim! Nos planos Completo e VIP, você recebe um certificado digital de conclusão após finalizar todas as aulas do curso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre o Instrutor */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="flex justify-center">
                  <img 
                    src="/vibrantpeak-logo.webp" 
                    alt="João Elvis - Vibrant Peak" 
                    className="w-48 h-48 rounded-full border-4 border-primary"
                  />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold">João Elvis</h3>
                  <p className="text-lg font-semibold text-primary">
                    Fundador da Vibrant Peak Assessoria em Marketing Digital
                  </p>
                  <p className="text-muted-foreground">
                    Com mais de 5 anos de experiência em marketing digital, João Elvis já ajudou centenas de empresas a transformarem sua presença online e gerarem resultados reais através do Google Meu Negócio e outras estratégias de marketing local.
                  </p>
                  <p className="text-muted-foreground">
                    Especialista em SEO local e otimização de perfis no Google, ele criou este curso para compartilhar todas as estratégias que utiliza com seus clientes de consultoria, de forma didática e acessível para qualquer pessoa.
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" asChild>
                      <a href="https://vibrantpeak.com.br" target="_blank" rel="noopener noreferrer">
                        Conhecer a Vibrant Peak
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="https://wa.me/5554991435405" target="_blank" rel="noopener noreferrer">
                        Falar no WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-hero">
        <div className="container">
          <Card className="max-w-4xl mx-auto bg-gradient-google text-white border-0 shadow-google-lg hover-lift">
            <CardContent className="pt-12 pb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pronto Para Transformar Seu Negócio?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Junte-se a centenas de empresários que já estão dominando o Google Meu Negócio e atraindo mais clientes todos os dias.
              </p>
              <Button 
                size="lg" 
                onClick={() => { scrollToPlans(); trackEvent('ViewContent'); }}
                className="bg-white text-primary hover:bg-white/90 text-lg px-8"
                data-gtm-event="click_cta_final"
              >
                Ver Planos e Começar Agora
              </Button>
              <p className="text-sm mt-6 opacity-75">
                🔒 Pagamento seguro • 💯 Garantia de 7 dias • ✅ Acesso imediato
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/vibrantpeak-logo.webp" alt="Vibrant Peak" className="h-10 w-10 rounded-full" />
                <span className="font-bold text-lg">Vibrant Peak</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Assessoria em Marketing Digital
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre o Curso</a></li>
                <li><a href="#modulos" className="hover:text-primary transition-colors">Módulos</a></li>
                <li><a href="#planos" className="hover:text-primary transition-colors">Planos</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📧 contato@vibrantpeak.com.br</li>
                <li>📱 (54) 99143-5405</li>
                <li>🌐 <a href="https://vibrantpeak.com.br" className="hover:text-primary transition-colors">vibrantpeak.com.br</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Vibrant Peak Assessoria em Marketing Digital. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

