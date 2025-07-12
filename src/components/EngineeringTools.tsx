import { useState } from 'react';
import { Calculator, Download, FileSpreadsheet, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

export const EngineeringTools = () => {
  const { toast } = useToast();
  const [roadData, setRoadData] = useState({
    length: '',
    width: '',
    thickness: '',
    soilType: '',
    trafficLoad: ''
  });

  const [results, setResults] = useState<any>(null);

  const calculateRoadDesign = () => {
    const length = parseFloat(roadData.length);
    const width = parseFloat(roadData.width);
    const thickness = parseFloat(roadData.thickness);
    
    if (!length || !width || !thickness) {
      toast({
        title: "خطأ في البيانات",
        description: "يرجى إدخال جميع القيم المطلوبة",
        variant: "destructive"
      });
      return;
    }

    // حسابات هندسية احترافية
    const volume = (length * width * thickness) / 1000; // m³
    const asphaltQuantity = volume * 2.4; // طن
    const aggregateQuantity = volume * 1.8; // طن
    const estimatedCost = volume * 120; // ريال سعودي

    setResults({
      volume,
      asphaltQuantity,
      aggregateQuantity,
      estimatedCost,
      area: length * width
    });

    toast({
      title: "تم الحساب بنجاح!",
      description: "تم حساب مواد الطريق والتكلفة التقديرية"
    });
  };

  const generateReport = () => {
    if (!results) return;
    
    const reportData = `
تقرير تصميم الطريق - مهندس محمد البكيتي

البيانات الأساسية:
- الطول: ${roadData.length} متر
- العرض: ${roadData.width} متر  
- السماكة: ${roadData.thickness} سم
- نوع التربة: ${roadData.soilType}
- حمولة المرور: ${roadData.trafficLoad}

النتائج:
- المساحة الإجمالية: ${results.area.toFixed(2)} م²
- حجم المواد: ${results.volume.toFixed(2)} م³
- كمية الأسفلت: ${results.asphaltQuantity.toFixed(2)} طن
- كمية الركام: ${results.aggregateQuantity.toFixed(2)} طن
- التكلفة التقديرية: ${results.estimatedCost.toLocaleString()} ريال سعودي

تاريخ التقرير: ${new Date().toLocaleDateString('ar-SA')}
    `;

    const blob = new Blob([reportData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'road-design-report.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-20 bg-gradient-space">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            أدوات الهندسة الاحترافية
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            حاسبات هندسية متطورة لتصميم الطرق والبنية التحتية
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* حاسبة تصميم الطرق */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-tech transition-all duration-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Calculator className="h-6 w-6 text-primary" />
                حاسبة تصميم الطرق
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="length">الطول (متر)</Label>
                  <Input
                    id="length"
                    type="number"
                    value={roadData.length}
                    onChange={(e) => setRoadData(prev => ({...prev, length: e.target.value}))}
                    className="bg-space-gray border-border/50"
                    placeholder="1000"
                  />
                </div>
                <div>
                  <Label htmlFor="width">العرض (متر)</Label>
                  <Input
                    id="width"
                    type="number"
                    value={roadData.width}
                    onChange={(e) => setRoadData(prev => ({...prev, width: e.target.value}))}
                    className="bg-space-gray border-border/50"
                    placeholder="12"
                  />
                </div>
                <div>
                  <Label htmlFor="thickness">السماكة (سم)</Label>
                  <Input
                    id="thickness"
                    type="number"
                    value={roadData.thickness}
                    onChange={(e) => setRoadData(prev => ({...prev, thickness: e.target.value}))}
                    className="bg-space-gray border-border/50"
                    placeholder="20"
                  />
                </div>
                <div>
                  <Label htmlFor="soilType">نوع التربة</Label>
                  <Select onValueChange={(value) => setRoadData(prev => ({...prev, soilType: value}))}>
                    <SelectTrigger className="bg-space-gray border-border/50">
                      <SelectValue placeholder="اختر نوع التربة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clay">طينية</SelectItem>
                      <SelectItem value="sand">رملية</SelectItem>
                      <SelectItem value="rocky">صخرية</SelectItem>
                      <SelectItem value="mixed">مختلطة</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="trafficLoad">حمولة المرور</Label>
                <Select onValueChange={(value) => setRoadData(prev => ({...prev, trafficLoad: value}))}>
                  <SelectTrigger className="bg-space-gray border-border/50">
                    <SelectValue placeholder="اختر حمولة المرور" />
                  </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">خفيفة (أقل من 1000 مركبة/يوم)</SelectItem>
                      <SelectItem value="medium">متوسطة (1000-5000 مركبة/يوم)</SelectItem>
                      <SelectItem value="heavy">ثقيلة (أكثر من 5000 مركبة/يوم)</SelectItem>
                    </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={calculateRoadDesign}
                className="w-full bg-primary hover:bg-primary/90 shadow-glow"
              >
                <Zap className="h-4 w-4 mr-2" />
                احسب التصميم
              </Button>
            </CardContent>
          </Card>

          {/* النتائج */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <FileSpreadsheet className="h-6 w-6 text-secondary" />
                نتائج التصميم
              </CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-space-gray rounded-lg">
                      <p className="text-sm text-muted-foreground">المساحة الإجمالية</p>
                      <p className="text-2xl font-bold text-primary">{results.area.toFixed(2)} م²</p>
                    </div>
                    <div className="p-4 bg-space-gray rounded-lg">
                      <p className="text-sm text-muted-foreground">حجم المواد</p>
                      <p className="text-2xl font-bold text-secondary">{results.volume.toFixed(2)} م³</p>
                    </div>
                    <div className="p-4 bg-space-gray rounded-lg">
                      <p className="text-sm text-muted-foreground">كمية الأسفلت</p>
                      <p className="text-2xl font-bold text-primary">{results.asphaltQuantity.toFixed(2)} طن</p>
                    </div>
                    <div className="p-4 bg-space-gray rounded-lg">
                      <p className="text-sm text-muted-foreground">التكلفة التقديرية</p>
                      <p className="text-2xl font-bold text-secondary">{results.estimatedCost.toLocaleString()} ريال</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={generateReport}
                    variant="outline"
                    className="w-full border-primary/50 hover:bg-primary/10"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    تحميل التقرير
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Calculator className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
                  <p className="text-muted-foreground">أدخل البيانات واضغط احسب للحصول على النتائج</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};